import ProductTs from '@/app/_mock/fakeProduct'
import Image from 'next/image'

const ProductImage = ({ currentProduct }: { currentProduct: ProductTs }) => {
	return (
		<div className='mx-auto sm:mt-6  w-full max-w-2xl lg:max-w-none'>
			<div className='relative flex h-[600px] cursor-pointer items-center justify-center sm:rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4'>
				<Image width={500} height={700} src={currentProduct.thumbnail} alt='' className='h-full w-full object-cover object-center' />
				<span className='pointer-events-none absolute inset-0 sm:rounded-md ring-2 ring-offset-2 sm:ring-stone-800' />
			</div>
		</div>
	)
}

export default ProductImage
