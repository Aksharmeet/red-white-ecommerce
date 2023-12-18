import { ProductStore, useCartStore } from '@/store/productStore'
import useStore from '@/store/useStore'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const NavCart = () => {
	const cartItems = useStore<ProductStore, ProductStore>(useCartStore, (state) => state)

	return (
		<div className='flow-root ml-2 xl:ml-4'>
			<Link href='/checkout' className='group -m-2 flex items-center p-2'>
				<ShoppingBagIcon className='h-6 w-6 flex-shrink-0 text-primary-text group-hover:text-primary' />
				<span className='ml-2 text-sm font-medium text-primary-text group-hover:text-primary'>{cartItems?.count || 0}</span>
			</Link>
		</div>
	)
}

export default NavCart
