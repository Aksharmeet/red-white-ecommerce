'use client'

import { CartItem, ProductStore, useCartStore } from '@/store/productStore'
import useStore from '@/store/useStore'
import { TrashIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

const ProductsOnCart = () => {
	const cartItems = useStore<ProductStore, ProductStore>(useCartStore, (state) => state)
	if (!cartItems)
		return (
			<ul role='list' className='divide-y divide-gray-200'>
				<ProductsLoading />
			</ul>
		)

	const { items, removeItem } = cartItems

	const decrementProductCount = (item: CartItem) => {
		for (let i = 0; i < item.count; i++) {
			removeItem(item.id)
		}
	}

	return (
		<ul role='list' className='divide-y divide-gray-200'>
			{items.map((product) => (
				<li key={product.id} className='text-primary-text '>
					<Link href={`/product${product.href}`} className='flex py-6 px-4 sm:px-6'>
						<div className='flex-shrink-0'>
							<Image width={100} height={100} src={product.thumbnail} alt={product.imageAlt} className='w-20 rounded-md' />
						</div>

						<div className='ml-6 flex flex-1 flex-col'>
							<div className='flex'>
								<div className='min-w-0 flex-1'>
									<p className='text-base font-medium'>{product.name}</p>
									<p className='text-sm mt-2 font-normal'>{product.productMaterial}</p>
								</div>

								<div className='ml-4 flow-root flex-shrink-0'>
									<button
										type='button'
										onClick={(e) => {
											e.preventDefault()
											decrementProductCount(product)
										}}
										className='-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500'
									>
										<TrashIcon className='h-5 w-5' />
									</button>
								</div>
							</div>

							<div className='flex flex-1 items-end justify-between pt-2'>
								<p className='mt-1 text-sm font-medium text-gray-900'>
									$ {product.price * product.count}
									<span className='text-xs text-gray-500 ml-1'>
										($ {product.price} x {product.count})
									</span>
								</p>

								<div className='ml-4'>{product.count}</div>
							</div>
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default ProductsOnCart

const ProductsLoading = () => {
	return (
		<li className='text-primary-text animate-pulse'>
			<div className='flex py-6 px-4 sm:px-6'>
				<div className='flex-shrink-0'>
					<div className='w-20 h-36 bg-gray-300 rounded-md'></div>
				</div>

				<div className='ml-6 flex flex-1 flex-col'>
					<div className='flex'>
						<div className='min-w-0 flex-1'>
							<div className='w-2/3 h-4 bg-gray-300 mb-2 rounded'></div>
							<div className='w-1/3 h-3 bg-gray-300 rounded'></div>
						</div>

						<div className='ml-4 flow-root flex-shrink-0'>
							<div className='w-8 h-8 bg-gray-300 rounded'></div>
						</div>
					</div>

					<div className='flex flex-1 items-end justify-between pt-2'>
						<div className='w-2/3 h-4 bg-gray-300 rounded'></div>
						<div className='w-1/3 h-4 bg-gray-300 rounded'></div>
					</div>
				</div>
			</div>
		</li>
	)
}
