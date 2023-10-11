import { getCookie, setCookie } from 'cookies-next'

export const getCurrentTheme = async () => {
	if (typeof window === 'undefined') {
		return import('next/headers').then(({ cookies }) => {
			return cookies().has('theme') ? cookies().get('theme')?.value : ''
		})
	}

	return getCookie('theme', { path: '/' })
}

export const toggleTheme = async () => {
	const theme = await getCurrentTheme()
	const newTheme = theme === 'dark' ? 'light' : 'dark'

	setCookie('theme', newTheme, {
		path: '/',
	})

	return newTheme
}

export interface AvailableThemes {
	theme: 'dark' | 'light' | 'color'
}

export const setTheme = async ({ theme }: AvailableThemes) => {
	setCookie('theme', theme, {
		path: '/',
	})

	return theme
}
