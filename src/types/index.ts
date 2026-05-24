export type ItemType = 'miniature' | 'book'
export type Status = 'todo' | 'wip' | 'done'

export interface CollectionItem {
  id: string
  type: ItemType
  name: string
  faction: string
  source: string
  status: Status
  notes: string
  tutorial: string
  paints: string
}

export type TabId = 'all' | 'mini' | 'book' | 'todo' | 'wip' | 'done'

export const STATUS_LABELS: Record<Status, string> = {
  todo: 'Non commencée',
  wip: 'Montée, non peinte',
  done: 'Peinte / Terminée',
}

export const STATUS_NEXT: Record<Status, Status> = {
  todo: 'wip',
  wip: 'done',
  done: 'todo',
}

export const STATUS_NEXT_LABEL: Record<Status, string> = {
  todo: '→ Monter',
  wip: '→ Peinte',
  done: '↺ Reset',
}
