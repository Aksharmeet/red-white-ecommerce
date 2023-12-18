'use client'

import ProductTs from '@/app/_mock/fakeProduct'
import { ProductStore, useCartStore } from '@/store/productStore'
import useStore from '@/store/useStore'

const CartButton = ({ currentProduct }: { currentProduct: ProductTs }) => {
	const cartItems = useStore<ProductStore, ProductStore>(useCartStore, (state) => state)
	if (!cartItems)
		return (
			<button
				type='button'
				className='flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-primary py-3 px-8 text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
			>
				Loading...
			</button>
		)

	const { items, addItem, removeItem, incrementItem } = cartItems

	const addedProduct = items.find((product) => product.id === currentProduct.id)

	const addProduct = () => {
		addItem({
			count: 1,
			id: currentProduct.id,
			name: currentProduct.name,
			price: currentProduct.price,
			productMaterial: currentProduct.productMaterial,
			productDescription: currentProduct.productDescription,
			href: currentProduct.href,
			thumbnail: currentProduct.thumbnail,
			imageAlt: currentProduct.imageAlt,
			rating: currentProduct.rating,
		})
	}

	const incrementProductCount = () => {
		incrementItem(currentProduct.id)
	}

	const decrementProductCount = () => {
		removeItem(currentProduct.id)
	}
	return (
		<>
			{addedProduct ? (
				<div className='max-w-xs grid grid-cols-3 grid-rows-1 gap-0 rounded-md  text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'>
					<button type='button' onClick={() => decrementProductCount()} className='hover:opacity-90 bg-primary rounded-l-md text-xl'>
						-
					</button>
					<span className='flex items-center py-3 px-8 justify-center text-primary-text border '>{addedProduct.count}</span>

					<button type='button' onClick={() => incrementProductCount()} className='hover:opacity-90 bg-primary rounded-r-md text-xl'>
						+
					</button>
				</div>
			) : (
				<button
					type='button'
					className='flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-primary py-3 px-8 text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
					onClick={() => addProduct()}
				>
					Add to bag
				</button>
			)}
		</>
	)
}

export default CartButton
