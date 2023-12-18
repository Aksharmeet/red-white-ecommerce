'use client'

const CartButton = () => {
	return (
		<button
			type='submit'
			className='flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-primary py-3 px-8 text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
		>
			Add to bag
		</button>
	)
}

export default CartButton
