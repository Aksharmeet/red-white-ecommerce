import products from '@/app/mock/fakeProducts.json'
import ProductTs from '@/app/mock/fakeProduct'
import ProductInfo from '@/app/components/product-page/productInfo'
import ProductImage from '@/app/components/product-page/productImage'

const Product = ({ params }: { params: { slug: string } }) => {
	const slug = params.slug
	const currentProduct = products.find((product: ProductTs) => product.href === '/' + slug) || products[0]

	return (
		<div>
			<main className='mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:max-w-none mb-20'>
					<div className='lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-10'>
						<ProductImage currentProduct={currentProduct} />
						<ProductInfo currentProduct={currentProduct} />
					</div>
				</div>
			</main>
		</div>
	)
}

export default Product
