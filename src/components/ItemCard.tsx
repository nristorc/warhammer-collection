import { useState } from 'react'
import { ChevronDown, ChevronUp, Pencil, Trash2, ExternalLink } from 'lucide-react'
import type { CollectionItem } from '../types'
import { STATUS_NEXT_LABEL } from '../types'
import { Badge } from './Badge'

interface ItemCardProps {
  item: CollectionItem
  onNext: () => void
  onEdit: () => void
  onDelete: () => void
}

export function ItemCard({ item, onNext, onEdit, onDelete }: ItemCardProps) {
  const [open, setOpen] = useState(false)
  const hasDetail = item.tutorial || item.paints || item.notes

  return (
    <div className="bg-white border border-gray-100 rounded-xl px-4 py-3 hover:border-gray-200 transition-colors">
      <div className="flex items-start gap-3">
        {/* Main info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-900">{item.name}</span>
            <Badge item={item} />
          </div>
          <div className="flex flex-wrap gap-3 mt-1 text-xs text-gray-400">
            {item.faction && <span>{item.faction}</span>}
            {item.source && <span className="text-gray-300">·</span>}
            {item.source && <span className="italic">{item.source}</span>}
          </div>

          {hasDetail && (
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 mt-1"
            >
              {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              {open ? 'Masquer' : 'Détails'}
            </button>
          )}

          {open && (
            <div className="mt-2 pt-2 border-t border-gray-50 space-y-1 text-xs text-gray-500">
              {item.paints && (
                <p>
                  <span className="font-medium text-gray-700">Peintures : </span>
                  {item.paints}
                </p>
              )}
              {item.tutorial && (
                <p>
                  <a
                    href={item.tutorial}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-blue-500 hover:underline"
                  >
                    <ExternalLink size={11} /> Tutoriel peinture
                  </a>
                </p>
              )}
              {item.notes && <p className="text-gray-400">{item.notes}</p>}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          {item.type === 'miniature' && (
            <button onClick={onNext} className="btn-xs">
              {STATUS_NEXT_LABEL[item.status]}
            </button>
          )}
          <button
            onClick={onEdit}
            className="p-1.5 rounded-lg text-gray-300 hover:text-gray-600 hover:bg-gray-50"
            aria-label="Modifier"
          >
            <Pencil size={13} />
          </button>
          <button
            onClick={onDelete}
            className="p-1.5 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50"
            aria-label="Supprimer"
          >
            <Trash2 size={13} />
          </button>
        </div>
      </div>
    </div>
  )
}
