import Hero from '@/app/_components/home-page/hero'
import Products from '@/app/_components/home-page/products'

export default function Home() {
	return (
		<div className='bg-white'>
			<Hero />
			<main>
				<Products />
			</main>
		</div>
	)
}
