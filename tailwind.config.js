/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'black-bg': '#011627d6',
				'dark-bg': '#010C15',
				'blue-bg': '#011627',
				'hover-bg': '#1e2d3d74',
				'active-bg': '#1e2d3d',
				'card-bg': '#011221',
				'button-bg': '#1C2B3A',
				// fonts
				'menu-text': '#607B96',
				'home-text': '#E5E9F0',
				string: '#E99287',
				'neon-green': '#43D9AD',
				purple: '#4D5BCE',

				// border
				'br-default': '#1E2D3D',
				'br-active': '#FEA55F',
				purple: '#5565E8',

				//gradient
				green: '#237b6d',
				darkGreen: '#43d9ad21',
			},
			fontFamily: {
				fira_light: 'Fira Code Light',
				fira_regular: 'Fira Code Regular',
				fira_retina: 'Fira Code Retina',
				fira_medium: 'Fira Code Medium',
				fira_semibold: 'Fira Code SemiBold',
				fira_bold: 'Fira Code Bold',
				fira_variable: 'Fira Code Variable',
			},
		},
	},
	plugins: [],
};
