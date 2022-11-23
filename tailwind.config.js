// Using tailwind css v3
// https://tailwindcss.com/docs/upgrade-guide

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				nyffinRed: '#910A0A',
				nyffinBlack: '#191919',
				nyffinGray: '#D1D1D1',
			},
			fontFamily: {
				archivoNarrow: 'Archivo Narrow',
				alumniSans: 'Alumni Sans',
				anton: 'Anton',
				bebasNeue: 'Bebas Neue',
			},
		},
	},
	plugins: [],
};
