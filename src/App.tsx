import { useRef, useState, useMemo } from 'react'
import { Plus, Download, Upload, Shield } from 'lucide-react'
import type { CollectionItem, TabId } from './types'
import { useCollection } from './hooks/useCollection'
import { ItemCard } from './components/ItemCard'
import { ItemModal } from './components/ItemModal'

const TABS: { id: TabId; label: string }[] = [
  { id: 'all', label: 'Tout' },
  { id: 'mini', label: 'Figurines' },
  { id: 'book', label: 'Livres' },
  { id: 'todo', label: 'À faire' },
  { id: 'wip', label: 'En cours' },
  { id: 'done', label: 'Terminées' },
]

export default function App() {
  const { items, addItem, updateItem, deleteItem, nextStatus, exportData, importData, stats } =
      useCollection()

  const [tab, setTab] = useState<TabId>('all')
  const [search, setSearch] = useState('')
  const [faction, setFaction] = useState('')
  const [editItem, setEditItem] = useState<CollectionItem | null | undefined>(undefined)
  const importRef = useRef<HTMLInputElement>(null)

  const factions = useMemo(
      () => [...new Set(items.map(i => i.faction).filter(Boolean))].sort(),
      [items]
  )

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return items.filter(i => {
      if (q && !i.name.toLowerCase().includes(q) &&
          !i.faction.toLowerCase().includes(q) &&
          !i.source.toLowerCase().includes(q)) return false
      if (faction && i.faction !== faction) return false
      if (tab === 'mini') return i.type === 'miniature'
      if (tab === 'book') return i.type === 'book'
      if (tab === 'todo') return i.type === 'miniature' && i.status === 'todo'
      if (tab === 'wip') return i.type === 'miniature' && i.status === 'wip'
      if (tab === 'done') return i.type === 'miniature' && i.status === 'done'
      return true
    })
  }, [items, tab, search, faction])

  // Group by faction
  const grouped = useMemo(() => {
    const map = new Map<string, CollectionItem[]>()
    filtered.forEach(i => {
      const key = i.faction?.trim() || 'Autre'
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push(i)
    })
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b, 'fr'))
  }, [filtered])

  const pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0

  function handleSave(data: Omit<CollectionItem, 'id'> & { id?: string }) {
    if (data.id) {
      updateItem(data as CollectionItem)
    } else {
      addItem(data)
    }
  }

  return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Warhammer Age of Sigmar</p>
              <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <Shield size={22} className="text-amber-600" />
                Ma Collection
              </h1>
            </div>
            <div className="flex gap-2">
              <input
                  ref={importRef}
                  type="file"
                  accept=".json"
                  className="hidden"
                  onChange={e => e.target.files?.[0] && importData(e.target.files[0])}
              />
              <button
                  onClick={() => importRef.current?.click()}
                  className="btn-secondary flex items-center gap-1.5 text-sm"
              >
                <Upload size={14} /> Importer
              </button>
              <button
                  onClick={exportData}
                  className="btn-secondary flex items-center gap-1.5 text-sm"
              >
                <Download size={14} /> Exporter
              </button>
              <button
                  onClick={() => setEditItem(null)}
                  className="btn-primary flex items-center gap-1.5 text-sm"
              >
                <Plus size={14} /> Ajouter
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
            {[
              { label: 'Figurines', value: stats.total, color: 'text-gray-900' },
              { label: 'Terminées', value: stats.done, color: 'text-emerald-600' },
              { label: 'En cours', value: stats.wip, color: 'text-amber-600' },
              { label: 'À faire', value: stats.todo, color: 'text-gray-400' },
              { label: 'Livres', value: stats.books, color: 'text-blue-600' },
              { label: 'Progression', value: `${pct}%`, color: 'text-gray-900' },
            ].map(s => (
                <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-3">
                  <p className="text-xs text-gray-400">{s.label}</p>
                  <p className={`text-xl font-semibold mt-0.5 ${s.color}`}>{s.value}</p>
                </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden mb-6">
            <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${pct}%` }}
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-1 flex-wrap mb-4 border-b border-gray-100 pb-1">
            {TABS.map(t => (
                <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        tab === t.id
                            ? 'bg-gray-100 text-gray-900 font-medium'
                            : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                  {t.label}
                </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-4 flex-wrap">
            <input
                type="text"
                placeholder="Rechercher..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="input flex-1 min-w-40 text-sm"
            />
            <select
                value={faction}
                onChange={e => setFaction(e.target.value)}
                className="input text-sm"
            >
              <option value="">Toutes les factions</option>
              {factions.map(f => (
                  <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* List */}
          {filtered.length === 0 ? (
              <p className="text-center text-gray-300 py-12 text-sm">Aucun élément trouvé</p>
          ) : (
              <div className="space-y-6">
                {grouped.map(([factionName, groupItems]) => (
                    <div key={factionName}>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2 px-1">
                        {factionName}
                      </p>
                      <div className="space-y-1.5">
                        {groupItems.map(item => (
                            <ItemCard
                                key={item.id}
                                item={item}
                                onNext={() => nextStatus(item.id)}
                                onEdit={() => setEditItem(item)}
                                onDelete={() => deleteItem(item.id)}
                            />
                        ))}
                      </div>
                    </div>
                ))}
              </div>
          )}
        </div>

        {/* Modal */}
        {editItem !== undefined && (
            <ItemModal
                item={editItem}
                onSave={handleSave}
                onClose={() => setEditItem(undefined)}
            />
        )}
      </div>
  )
}
