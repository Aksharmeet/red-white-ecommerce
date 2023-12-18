import Hero from './components/home-page/hero'
import Products from './components/home-page/products'

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
