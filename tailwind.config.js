/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'primary': '#ccd6f6',
				'secondary': '#8892b0',
				'secondary2': '#54617a',
				'accent': '#64ffda',
				'navy': '#0a192f',
				'light-navy': '#112240',
				'lightest-navy': '#233554',
				'slate': '#8892b0',
				'light-slate': '#a8b2d1',
				'lightest-slate': '#ccd6f6',
			},
			fontFamily: {
				'mono': ['SF Mono', 'Fira Code', 'monospace'],
				'sans': ['Calibre', 'Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				fadeIn: 'fadeIn 2s ease-in-out forwards',
				fadeOut: 'fadeOut 2s ease-in-out forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeOut: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
			},
			height: {
				'safe-area': 'env(safe-area-inset-bottom, 0px)'
			}
		},
	},
	plugins: [],
};
