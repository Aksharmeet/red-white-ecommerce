import Image from 'next/image'
import Link from 'next/link'
import products from '@/app/mock/fakeProducts.json'

const Products = () => {
	return (
		<section>
			<div className='mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
				<div className='sm:flex sm:items-baseline sm:justify-between'>
					<h2 id='favorites-heading' className='text-4xl font-bold tracking-tight text-gray-900'>
						Our Collection
					</h2>
					<Link href='/collection' className='hidden text-sm font-semibold text-primary hover:opacity-70 sm:block'>
						Browse our collection
						<span> &rarr;</span>
					</Link>
				</div>

				<div className='mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-10 sm:gap-x-6 lg:gap-x-8'>
					{products.slice(0, 6).map((product) => (
						<Link href={`/product${product.href}`} key={product.id} className='group relative'>
							<div className=' w-full max-h-[500px] overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto'>
								<Image src={product.thumbnail} alt={product.imageAlt} className='h-full w-full object-cover object-center' height={500} width={400} />
							</div>
							<h3 className='mt-4 text-base font-semibold text-gray-900'>
								<span className='absolute inset-0' />
								{product.name}
							</h3>
							<p className='mt-1 text-sm text-gray-500'>$ {product.price}</p>
						</Link>
					))}
				</div>

				<div className='mt-6 sm:hidden'>
					<Link href='/collection' className='block text-sm font-semibold text-primary hover:opacity-90'>
						Browse collection
						<span> &rarr;</span>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Products
