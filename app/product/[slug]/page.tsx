import { HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import products from '@/app/mock/fakeProducts.json'

const Product = ({ params }: { params: { slug: string } }) => {
	const slug = params.slug
	console.log(slug)
	const currentProduct = products.find((product) => product.href === '/' + slug) || products[0]

	return (
		<div className='bg-white'>
			{/* Mobile menu */}

			<main className='mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:max-w-none mb-20'>
					{/* Product */}
					<div className='lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-10'>
						<div className='flex flex-col-reverse'>
							<div className='mx-auto sm:mt-6  w-full max-w-2xl lg:max-w-none'>
								<div className='relative flex h-[600px] cursor-pointer items-center justify-center sm:rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4'>
									<span className='absolute inset-0 overflow-hidden sm:rounded-md'>
										<Image width={500} height={700} src={currentProduct?.thumbnail} alt='' className='h-full w-full object-cover object-center' />
									</span>
									<span className='pointer-events-none absolute inset-0 sm:rounded-md ring-2 ring-offset-2 sm:ring-stone-800' />
								</div>
							</div>
						</div>

						{/* Product info */}
						<div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
							<h1 className='text-3xl font-bold tracking-tight text-gray-900'>{currentProduct.name}</h1>
							<div className='mt-3'>
								<p className='text-3xl tracking-tight text-gray-900'>{currentProduct.price}</p>
							</div>

							{/* Reviews */}
							<div className='mt-3'>
								<div className='flex items-center'>
									<div className='flex items-center'>
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon
												key={rating}
												className={`${currentProduct.rating > rating ? 'text-primary' : 'text-gray-300'} h-5 w-5 flex-shrink-0`}
											/>
										))}
									</div>
								</div>
							</div>

							{/*  */}
							<div className='mt-6'>
								<div className='space-y-6 text-base text-gray-700'>
									<p>{currentProduct.productDescription}</p>
								</div>
							</div>
							<form className='mt-6'>
								<div className='mt-10 flex'>
									<button
										type='submit'
										className='flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-primary py-3 px-8 text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
									>
										Add to bag
									</button>
									<button
										type='button'
										className='ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500'
									>
										<HeartIcon className='h-6 w-6 flex-shrink-0' />
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Product
