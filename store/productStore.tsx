import { create } from 'zustand'

type CartItem = {
	id: string
	count: number
}

type State = { items: CartItem[] }

type Action = {
	addItem: (item: CartItem) => void
	removeItem: (id: string) => void
	clearCart: () => void
}

const useCartStore = create<State & Action>((set) => ({
	items: [],
	addItem: (item) => set((state) => ({ items: [...state.items, item] })),
	removeItem: (id) =>
		set((state) => ({
			items: state.items.map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item)).filter((item) => item.count !== 0),
		})),
	clearCart: () => set(() => ({ items: [] })),
}))

export { useCartStore }
