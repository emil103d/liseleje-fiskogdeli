/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			darkblue: '#1f425f',
			lightblue: '#f8fcfe',
			yellowdot: '#E5C72E',
			white: '#ffffff',
			black: '#0000',
			textcolor: '#1f425f',
			attention: '#E5C72E',
			test1: '#00FF00',
			test2: '#7f00ff'
		},

		fontFamily: {
			headingtext: ['Abril Fatface', 'cursive'],
			primarytext: ['Montserrat', 'sans-serif']
		},

		extend: {
			keyframes: {
				test: {
					'0%, 100%': {transform: 'rotate(180deg)'},
					'50%': { transform: 'rotate(10deg)'},
				}
			}
		}
	},
	plugins: []
};
