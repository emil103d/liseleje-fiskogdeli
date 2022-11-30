/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			darkblue: '#1f425f',
			lightblue: '#f8fcfe',
			shadowblue: '#B9DDF6',
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

		extend: {}
	},
	plugins: []
};
