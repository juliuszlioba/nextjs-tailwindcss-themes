'use client'

//import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Sun, Moon, Palette, Laptop } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as Tooltip from '@radix-ui/react-tooltip'

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false)
	const { setTheme } = useTheme()

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<div className="flex flex-col items-center gap-4">
			<h2>Set</h2>

			<div className="flex gap-2">
				<Tooltip.Provider delayDuration={300}>
					<Tooltip.Root>
						<Tooltip.Trigger>
							<button
								className="button theme-light"
								onClick={() => setTheme('light')}
							>
								<Sun strokeWidth={1.5} className="h-6 w-6" />
							</button>
						</Tooltip.Trigger>
						<Tooltip.Portal>
							<Tooltip.Content>
								<div className="rounded-md bg-primary px-2 py-1">
									Light theme
								</div>
								<Tooltip.Arrow className="TooltipArrow " />
							</Tooltip.Content>
						</Tooltip.Portal>
					</Tooltip.Root>
				</Tooltip.Provider>

				<Tooltip.Provider delayDuration={300}>
					<Tooltip.Root>
						<Tooltip.Trigger>
							<button
								className="button theme-color"
								onClick={() => setTheme('color')}
							>
								<Palette strokeWidth={1.5} className="h-6 w-6" />
							</button>
						</Tooltip.Trigger>
						<Tooltip.Portal>
							<Tooltip.Content>
								<div className="rounded-md bg-primary px-2 py-1">
									Color theme
								</div>
								<Tooltip.Arrow className="TooltipArrow " />
							</Tooltip.Content>
						</Tooltip.Portal>
					</Tooltip.Root>
				</Tooltip.Provider>

				<Tooltip.Provider delayDuration={300}>
					<Tooltip.Root>
						<Tooltip.Trigger>
							<button
								className="button theme-dark"
								onClick={() => setTheme('dark')}
							>
								<Moon strokeWidth={1.5} className="h-6 w-6" />
							</button>
						</Tooltip.Trigger>
						<Tooltip.Portal>
							<Tooltip.Content>
								<div className="rounded-md bg-primary px-2 py-1">
									Dark theme
								</div>
								<Tooltip.Arrow className="TooltipArrow " />
							</Tooltip.Content>
						</Tooltip.Portal>
					</Tooltip.Root>
				</Tooltip.Provider>

				<Tooltip.Provider delayDuration={300}>
					<Tooltip.Root>
						<Tooltip.Trigger>
							<button className="button" onClick={() => setTheme('system')}>
								<Laptop strokeWidth={1.5} className="h-6 w-6" />
							</button>
						</Tooltip.Trigger>
						<Tooltip.Portal>
							<Tooltip.Content>
								<div className="rounded-md bg-primary px-2 py-1">
									System default
								</div>
								<Tooltip.Arrow className="TooltipArrow " />
							</Tooltip.Content>
						</Tooltip.Portal>
					</Tooltip.Root>
				</Tooltip.Provider>
			</div>
		</div>
	)
}
