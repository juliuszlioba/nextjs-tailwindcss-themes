'use client'

import { useRouter } from 'next/navigation'
import { toggleTheme, setTheme, AvailableThemes } from '@/lib/theme'
import { Sun, Moon, Palette } from 'lucide-react'

export default function ThemeToggler() {
	const router = useRouter()

	const toggle = async () => {
		await toggleTheme()
		return router.refresh()
	}

	const changeTheme = async ({ theme }: AvailableThemes) => {
		await setTheme({ theme })
		return router.refresh()
	}

	return (
		<div className="flex flex-col items-center gap-4">
			<h2>Toggle</h2>

			<button
				type="button"
				title="Toggle dark mode"
				aria-label="Toggle dark mode"
				onClick={toggle}
				className="button"
			>
				<span className="">
					<Sun strokeWidth={1.5} className="h-6 w-6" />
				</span>
				<span className="">
					<Moon strokeWidth={1.5} className="h-6 w-6" />
				</span>
			</button>

			<h2>Set</h2>

			<div className="flex gap-2">
				<button
					className="button theme-light"
					onClick={() => changeTheme({ theme: 'light' })}
				>
					<Sun strokeWidth={1.5} className="h-6 w-6" />
				</button>

				<button
					className="button theme-color"
					onClick={() => changeTheme({ theme: 'color' })}
				>
					<Palette strokeWidth={1.5} className="h-6 w-6" />
				</button>

				<button
					className="button theme-dark"
					onClick={() => changeTheme({ theme: 'dark' })}
				>
					<Moon strokeWidth={1.5} className="h-6 w-6" />
				</button>
			</div>
		</div>
	)
}
