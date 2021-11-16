module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				orange: "#fe9126",
				lightgray: "#333333",
				grayccc: "#cccccc",
				grayf5: "#f5f5f5",
				grayborder: "#bebebe",
				darkgrayborder: "#c0bebe",
				skyblue: "#016773",
				darkgray: "#777777",
				btnblue: "#3399cc",
				green: "#029241",
				yellow: "#fab005",
				bgBrand: "#eed3b6",
				bgContent: "#2b2a2a",
				bgSocial: "#393737",
				textContent: "#afafaf",
				nine: "#999999",
				fb: "#3b5998",
				twitter: "#1da1f2",
				web: "#ea4c89",
				vimeo: "#1ab7ea",
			},
			gridTemplateColumns: {
				customGrid: "repeat(6, 1fr)",
				custom4Grid: "repeat(4, 1fr)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
