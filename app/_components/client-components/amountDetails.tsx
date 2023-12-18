'use client'

import { ProductStore, useCartStore } from '@/store/productStore'
import useStore from '@/store/useStore'

const AmountComponent = ({ title, amount }: { title: string; amount: string }) => (
	<div className='flex items-center justify-between'>
		<dt className='text-sm'>{title}</dt>
		<dd className='text-sm font-medium text-gray-900'>{amount}</dd>
	</div>
)

const AmountDetails = () => {
	const cartItems = useStore<ProductStore, ProductStore>(useCartStore, (state) => state)

	if (!cartItems) return <></>

	const { items } = cartItems

	const totalAmount = () => {
		return items.reduce((prevVal, item) => prevVal + item.price * item.count, 0)
	}

	const taxes = (taxRate: number) => {
		return items.reduce((prevVal, item) => prevVal + item.price * item.count, 0) * (taxRate / 100)
	}

	return (
		<dl className='space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6'>
			<AmountComponent title='Subtotal' amount={`$ ${totalAmount().toFixed(2)}`} />
			<AmountComponent title='Shipping' amount='$5.00' />
			<AmountComponent title='Taxes' amount={`$ ${taxes(8).toFixed(2)}`} />

			<div className='flex items-center justify-between border-t border-gray-200 pt-6'>
				<dt className='text-base font-medium'>Total</dt>
				<dd className='text-base font-medium text-gray-900'>$ {(totalAmount() + taxes(8) + 5).toFixed(2)}</dd>
			</div>
		</dl>
	)
}

export default AmountDetails
