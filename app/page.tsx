import Hero from './components/home/hero'
import Products from './components/home/products'

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
