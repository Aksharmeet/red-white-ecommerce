import ProductTs from '@/app/_mock/fakeProduct'
import { StarIcon } from '@heroicons/react/24/solid'

const ReviewStars = ({ currentProduct }: { currentProduct: ProductTs }) => {
	return (
		<div className='flex items-center'>
			<div className='flex items-center'>
				{[0, 1, 2, 3, 4].map((rating) => (
					<StarIcon key={rating} className={`${currentProduct.rating > rating ? 'text-primary' : 'text-gray-300'} h-5 w-5 flex-shrink-0`} />
				))}
			</div>
		</div>
	)
}

export default ReviewStars
