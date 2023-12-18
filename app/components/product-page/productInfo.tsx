import ProductTs from '@/app/mock/fakeProduct'
import CartButton from '../client-components/cartButton'
import LikeButton from '../common/likeButton'
import ReviewStars from '../common/reviewStars'

const ProductInfo = ({ currentProduct }: { currentProduct: ProductTs }) => {
	return (
		<div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
			<h1 className='text-3xl font-bold tracking-tight text-gray-900'>{currentProduct.name}</h1>
			<div className='mt-3'>
				<p className='text-3xl tracking-tight text-gray-900'>{currentProduct.price}</p>
			</div>

			<div className='mt-3'>
				<ReviewStars currentProduct={currentProduct} />
			</div>
			<div className='mt-6'>
				<div className='space-y-6 text-base text-gray-700'>
					<p>{currentProduct.productDescription}</p>
				</div>
			</div>
			<form className='mt-6'>
				<div className='mt-10 flex'>
					<CartButton />
					<LikeButton />
				</div>
			</form>
		</div>
	)
}

export default ProductInfo
