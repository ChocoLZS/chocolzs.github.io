import { create } from 'zustand'

interface SidebarState {
  sidebarOpen: boolean
  toggleSidebar: () => void
  closeSidebar: () => void
}

const useSidebarStore = create<SidebarState>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  closeSidebar: () => set({ sidebarOpen: false }),
}))

export default useSidebarStore
