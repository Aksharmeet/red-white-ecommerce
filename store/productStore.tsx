import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = {
	id: string
	count: number
	name: string
	price: number
	productMaterial: string
	productDescription: string
	href: string
	thumbnail: string
	imageAlt: string
	rating: number
}

type State = { items: CartItem[]; count: number }

type Action = {
	addItem: (item: CartItem) => void
	incrementItem: (id: string) => void
	removeItem: (id: string) => void
	clearCart: () => void
}

export type ProductStore = Action & State

const useCartStore = create<State & Action>()(
	persist(
		(set) => ({
			items: [],
			count: 0,
			addItem: (item) => set((state) => ({ items: [...state.items, item], count: state.count + 1 })),
			incrementItem: (id) =>
				set((state) => ({
					items: state.items.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item)),
					count: state.count + 1,
				})),
			removeItem: (id) =>
				set((state) => ({
					items: state.items.map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item)).filter((item) => item.count !== 0),
					count: state.count - 1,
				})),
			clearCart: () => set(() => ({ items: [], count: 0 })),
		}),
		{ name: 'cartItems' }
	)
)

export { useCartStore }
