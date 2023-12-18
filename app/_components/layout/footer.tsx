import logo from '@/public/assets/svg/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const footerNavigation = [
	{ name: 'Home', href: '/' },
	{ name: 'Collection', href: '/products' },
]

const Footer = () => {
	return (
		<footer className='shadow bg-stone-100 py-2'>
			<div className='w-full mx-auto md:py-8 max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='sm:flex sm:items-center sm:justify-between '>
					<Link href='/' className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
						<Image src={logo} height={24} width={24} alt='e-commerce logo' />
						<span className='font-bold text-lg text-primary-text'>E-Shop</span>
					</Link>
					<ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-primary-text sm:mb-0 '>
						{footerNavigation.map((link) => (
							<Link href={link.href} key={link.href} className='hover:underline me-4 md:me-6'>
								{link.name}
							</Link>
						))}
					</ul>
				</div>

				<span className='block text-sm text-primary-text mt-10 sm:text-center '>
					© 2023{' '}
					<Link href='/' className='hover:underline'>
						E-Shop
					</Link>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	)
}

export default Footer
