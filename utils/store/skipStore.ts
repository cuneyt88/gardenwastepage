import { create } from 'zustand'

// Interface defining skip (waste container) properties
interface Skip {
  id: number
  size: number
  hire_period_days: number
  price_before_vat: number | null
  vat: number
  allows_heavy_waste: boolean
  allowed_on_road: boolean
}

// Type for global skip selection state management
interface SkipState {
  selectedSkip: Skip | null
  bestSkip: Skip | null
  skips: Skip[]
  setSkips: (skips: Skip[]) => void
  setSelectedSkip: (skip: Skip | null) => void
  setBestSkip: (skip: Skip | null) => void
}

// Create Zustand store for skip selection state
export const useSkipStore = create<SkipState>((set) => ({
  selectedSkip: null,
  bestSkip: null,
  skips: [],
  setSkips: (skips) => set({ skips }),
  setSelectedSkip: (selectedSkip) => set({ selectedSkip }),
  setBestSkip: (bestSkip) => set({ bestSkip })
}))