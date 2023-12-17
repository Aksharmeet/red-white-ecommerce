'use client'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/assets/svg/logo.svg'
import Link from 'next/link'

const navigation = [
	{
		name: 'Home',
		route: '/',
	},
	{
		name: 'Collection',
		route: '/products',
	},
]

const Navbar = () => {
	const [open, setOpen] = useState(false)
	return (
		<nav className='z-20 bg-white bg-opacity-80 backdrop-blur-xl backdrop-filter shadow-md sticky top-0'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2'>
				<div className='flex  items-center'>
					<button type='button' className='rounded-md bg-white p-2 text-primary-text lg:hidden' onClick={() => setOpen(true)}>
						<Bars3Icon className='h-6 w-6' />
					</button>
					{/* Logo */}
					<div className='ml-4 flex lg:ml-0'>
						<Link href='/' className='flex items-center'>
							<div className='w-8'>
								<Image priority src={logo} height={24} width={24} alt='e-commerce logo' />
							</div>
							<span className='font-bold text-lg text-primary-text'>E-Shop</span>
						</Link>
					</div>
					<div className='ml-auto flex items-center'>
						{/* Search */}
						<div className='flex gap-4'>
							{navigation.map((link) => (
								<Link href={link.route} key={link.route} className='text-sm text-primary-text font-medium hover:text-primary'>
									{link.name}
								</Link>
							))}
						</div>
						<div className='flex ml-6'>
							<Link href='#' className='p-2 text-primary-text hover:text-primary'>
								<MagnifyingGlassIcon className='h-6 w-6' />
							</Link>
						</div>

						{/* Cart */}
						<div className='flow-root ml-2 xl:ml-4'>
							<Link href='/checkout' className='group -m-2 flex items-center p-2'>
								<ShoppingBagIcon className='h-6 w-6 flex-shrink-0 text-primary-text group-hover:text-primary' />
								<span className='ml-2 text-sm font-medium text-primary-text group-hover:text-primary'>0</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
