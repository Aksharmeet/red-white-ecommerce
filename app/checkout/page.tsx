import ContactInformation from '../_components/checkout-page/contactInformation'
import OrderSummary from '../_components/checkout-page/orderSummary'

const Checkout = () => {
	return (
		<div className='bg-gray-50'>
			<div className='mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8'>
				<form className='lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16'>
					<ContactInformation />
					<OrderSummary />
				</form>
			</div>
		</div>
	)
}

export default Checkout
