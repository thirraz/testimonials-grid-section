/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			width: {
				"90pc": "90%",
				25: "6.5rem",
			},
			height: {
				25: "6.5rem",
			},
			padding: {
				3.3: "3.3rem",
			},
		},
		fontFamily: {
			barlow: ["Barlow Semi Condensed", "sans-serif"],
		},
		fontSize: {
			verySmall: ".9rem",
			normal: "1.05rem",
			h1Size: "1.75rem",
			h2Size: "1.5rem",
		},
	},
	plugins: [],
};
