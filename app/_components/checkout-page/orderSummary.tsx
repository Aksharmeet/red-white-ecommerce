import ProductsOnCart from '../client-components/productsOnCart'
import AmountDetails from '../client-components/amountDetails'

const OrderSummary = () => {
	return (
		<div className='mt-10 lg:mt-0'>
			<h2 className='text-lg font-medium text-gray-900'>Order summary</h2>

			<div className='mt-4 rounded-lg border border-gray-200 bg-white shadow-sm'>
				<ProductsOnCart />
				<AmountDetails />
				<div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
					<button
						type='submit'
						className='w-full rounded-md border border-transparent bg-primary py-3 px-4 text-base font-medium text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50'
					>
						Confirm order
					</button>
				</div>
			</div>
		</div>
	)
}

export default OrderSummary
