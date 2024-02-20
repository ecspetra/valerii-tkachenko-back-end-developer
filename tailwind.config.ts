import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-outfit)'],
			},
			colors: {
				'background-color':
					'rgb(var(--background-color) / <alpha-value>)',
				'main-color': 'rgb(var(--main-color) / <alpha-value>)',
				'main-text-color':
					'rgb(var(--main-text-color) / <alpha-value>)',
				'dark-text-color':
					'rgb(var(--dark-text-color) / <alpha-value>)',
				'border-color': 'rgb(var(--border-color) / <alpha-value>)',
			},
		},
	},
	plugins: [],
}
export default config
