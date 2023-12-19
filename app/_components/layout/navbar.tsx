'use client'

import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/assets/svg/logo.svg'
import Link from 'next/link'
import NavCart from '../client-components/navCart'

// Navigation links
const navigation = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Collection',
		href: '/collection',
	},
]

// MobileMenu component
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
	return (
		<div
			className={`lg:hidden fixed top-[58px] left-0 w-full h-screen bg-white bg-opacity-90 backdrop-blur-xl backdrop-filter z-50 ${
				isOpen ? 'block' : 'hidden'
			}`}
		>
			{/* Mobile menu content goes here */}
			<ul className='flex flex-col h-full w-full'>
				{navigation.map((link) => (
					<li key={link.href}>
						<Link
							href={link.href}
							onClick={onClose}
							className='text-2xl hover:bg-stone-200 py-4 px-4 sm:px-6 w-full block font-light text-primary-text hover:text-primary'
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

// Navbar component
const Navbar = () => {
	const [open, setOpen] = useState(false)

	// Function to toggle mobile menu
	const toggleMenu = () => {
		setOpen(!open)
	}

	return (
		<nav className='z-20 bg-white bg-opacity-80 backdrop-blur-xl backdrop-filter shadow-md sticky top-0'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2'>
				<div className='flex items-center'>
					<button type='button' className='rounded-md bg-white p-2 text-primary-text lg:hidden' onClick={toggleMenu}>
						<Bars3Icon className='h-6 w-6' />
					</button>
					<div className='ml-4 flex lg:ml-0'>
						<Link href='/' className='flex items-center'>
							<div className='w-8'>
								<Image priority src={logo} height={24} width={24} alt='e-commerce logo' />
							</div>
							<span className='font-bold text-lg text-primary-text'>E-Shop</span>
						</Link>
					</div>
					<div className='ml-auto flex items-center'>
						<div className='gap-4 hidden lg:flex'>
							{navigation.map((link) => (
								<Link href={link.href} key={link.href} className='text-sm text-primary-text font-medium hover:text-primary'>
									{link.name}
								</Link>
							))}
						</div>
						<div className='flex ml-6'>
							<Link href='#' className='p-2 text-primary-text hover:text-primary'>
								<MagnifyingGlassIcon className='h-6 w-6' />
							</Link>
						</div>
						<NavCart />
					</div>
				</div>
			</div>

			{/* MobileMenu component */}
			<MobileMenu isOpen={open} onClose={toggleMenu} />
		</nav>
	)
}

export default Navbar
