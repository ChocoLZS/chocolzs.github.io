import { create } from 'zustand'

interface TagStore {
  selectedTag: string
  setSelectedTag: (tag: string) => void
  formattedTag: (tag: string) => string
  isTagEqual: (tag: string) => boolean
}

export const useTagStore = create<TagStore>((set, get) => ({
  selectedTag: '',
  setSelectedTag: (tag) => set({ selectedTag: tag }),
  formattedTag: (tag) => tag.toLowerCase().replace(/\s/g, '-'),
  isTagEqual: (tag) => get().formattedTag(tag) === get().formattedTag(get().selectedTag),
}))
