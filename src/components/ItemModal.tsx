import { useEffect, useState } from 'react'
import type { CollectionItem } from '../types'
import { X } from 'lucide-react'

interface ItemModalProps {
  item?: CollectionItem | null
  onSave: (item: Omit<CollectionItem, 'id'> & { id?: string }) => void
  onClose: () => void
}

const EMPTY: Omit<CollectionItem, 'id'> = {
  type: 'miniature',
  name: '',
  faction: '',
  source: '',
  status: 'todo',
  notes: '',
  tutorial: '',
  paints: '',
}

export function ItemModal({ item, onSave, onClose }: ItemModalProps) {
  const [form, setForm] = useState<Omit<CollectionItem, 'id'>>(EMPTY)

  useEffect(() => {
    setForm(item ? { ...item } : EMPTY)
  }, [item])

  function set<K extends keyof typeof form>(key: K, val: (typeof form)[K]) {
    setForm(prev => ({ ...prev, [key]: val }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim()) return
    onSave(item ? { ...form, id: item.id } : form)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-base font-semibold text-gray-900">
            {item ? 'Modifier' : 'Ajouter un élément'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <Field label="Nom *">
            <input
              required
              className="input"
              value={form.name}
              onChange={e => set('name', e.target.value)}
              placeholder="Ex: Gardus Steel Soul"
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Type">
              <select
                className="input"
                value={form.type}
                onChange={e => set('type', e.target.value as CollectionItem['type'])}
              >
                <option value="miniature">Figurine</option>
                <option value="book">Livre / Battletome</option>
              </select>
            </Field>

            {form.type === 'miniature' && (
              <Field label="Statut">
                <select
                  className="input"
                  value={form.status}
                  onChange={e => set('status', e.target.value as CollectionItem['status'])}
                >
                  <option value="todo">Non commencée</option>
                  <option value="wip">Montée, non peinte</option>
                  <option value="done">Peinte / Terminée</option>
                </select>
              </Field>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Faction">
              <input
                className="input"
                value={form.faction}
                onChange={e => set('faction', e.target.value)}
                placeholder="Ex: Stormcast Eternals"
              />
            </Field>
            <Field label="Source / Boite">
              <input
                className="input"
                value={form.source}
                onChange={e => set('source', e.target.value)}
                placeholder="Ex: Raz-de-Skavens"
              />
            </Field>
          </div>

          <Field label="Peintures nécessaires">
            <input
              className="input"
              value={form.paints}
              onChange={e => set('paints', e.target.value)}
              placeholder="Retributor Armour, Nuln Oil, Agrax Earthshade..."
            />
          </Field>

          <Field label="Lien tutoriel peinture">
            <input
              className="input"
              value={form.tutorial}
              onChange={e => set('tutorial', e.target.value)}
              placeholder="https://youtu.be/..."
            />
          </Field>

          <Field label="Notes">
            <textarea
              className="input resize-none"
              rows={3}
              value={form.notes}
              onChange={e => set('notes', e.target.value)}
              placeholder="Rappels, idées de couleurs..."
            />
          </Field>

          <div className="flex gap-3 justify-end pt-2">
            <button type="button" onClick={onClose} className="btn-secondary">
              Annuler
            </button>
            <button type="submit" className="btn-primary">
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
      {children}
    </div>
  )
}
