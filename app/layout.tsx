import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/_components/layout/navbar'
import Footer from '@/app/_components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'E-Shop',
	description: 'E-Shop Station',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
