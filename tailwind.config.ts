import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			background: 'rgb(var(--background-rgb) / <alpha-value>)',
			content: 'rgb(var(--foreground-rgb) / <alpha-value>)',
			primary: 'rgb(var(--primary-rgb) / <alpha-value>)',
			secondary: 'rgb(var(--secondary-rgb) / <alpha-value>)',
		},
		extend: {},
	},
	plugins: [],
}
export default config
