import type { CollectionItem, Status } from '../types'
import { STATUS_LABELS } from '../types'

interface BadgeProps {
  item: CollectionItem
}

const STATUS_CLASSES: Record<Status, string> = {
  todo: 'bg-gray-100 text-gray-600',
  wip: 'bg-amber-100 text-amber-700',
  done: 'bg-emerald-100 text-emerald-700',
}

export function Badge({ item }: BadgeProps) {
  if (item.type === 'book') {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
        Livre
      </span>
    )
  }
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_CLASSES[item.status as Status]}`}
    >
      {STATUS_LABELS[item.status as Status]}
    </span>
  )
}
