import '../styles/globals.css'
import { getCurrentTheme } from '@/lib/theme'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Tailwindcss themes',
	description: 'Simple project for theme selector options.',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const theme = await getCurrentTheme()

	return (
		<html lang="en" data-theme={theme}>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
