import { useState, useEffect, useCallback } from 'react'
import type { CollectionItem, Status } from '../types'
import { STATUS_NEXT } from '../types'
import { INITIAL_DATA } from '../data/initialData'

const STORAGE_KEY = 'wh_collection_v1'

function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export function useCollection() {
  const [items, setItems] = useState<CollectionItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) return JSON.parse(stored) as CollectionItem[]
    } catch {
      // ignore
    }
    return INITIAL_DATA
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = useCallback((item: Omit<CollectionItem, 'id'>) => {
    setItems(prev => [...prev, { ...item, id: uid() }])
  }, [])

  const updateItem = useCallback((updated: CollectionItem) => {
    setItems(prev => prev.map(i => (i.id === updated.id ? updated : i)))
  }, [])

  const deleteItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  const nextStatus = useCallback((id: string) => {
    setItems(prev =>
      prev.map(i =>
        i.id === id ? { ...i, status: STATUS_NEXT[i.status as Status] } : i
      )
    )
  }, [])

  // Export JSON
  const exportData = useCallback(() => {
    const blob = new Blob([JSON.stringify(items, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `warhammer-collection-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }, [items])

  // Import JSON
  const importData = useCallback((file: File) => {
    const reader = new FileReader()
    reader.onload = e => {
      try {
        const parsed = JSON.parse(e.target?.result as string) as CollectionItem[]
        if (Array.isArray(parsed)) {
          setItems(parsed)
        }
      } catch {
        alert('Fichier JSON invalide.')
      }
    }
    reader.readAsText(file)
  }, [])

  const stats = {
    total: items.filter(i => i.type === 'miniature').length,
    done: items.filter(i => i.type === 'miniature' && i.status === 'done').length,
    wip: items.filter(i => i.type === 'miniature' && i.status === 'wip').length,
    todo: items.filter(i => i.type === 'miniature' && i.status === 'todo').length,
    books: items.filter(i => i.type === 'book').length,
  }

  return {
    items,
    addItem,
    updateItem,
    deleteItem,
    nextStatus,
    exportData,
    importData,
    stats,
  }
}
