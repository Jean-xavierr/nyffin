module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				nyffinRed: '#910A0A',
				nyffinBlack: '#191919',
			},
			fontFamily: {
				archivoNarrow: 'Archivo Narrow',
				alumniSans: 'Alumni Sans',
				anton: 'Anton',
			},
		},
	},
	variants: {},
	plugins: [],
};
