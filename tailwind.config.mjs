/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#ccefed",
					200: "#99dfdb",
					300: "#66cec9",
					400: "#33beb7",
					500: "#00aea5",
					600: "#008b84",
					700: "#006863",
					800: "#004642",
					900: "#002321",
				},
				secondary: {
					100: "#d3d4e3",
					200: "#a8a9c7",
					300: "#7c7daa",
					400: "#51528e",
					500: "#252772",
					600: "#1e1f5b",
					700: "#161744",
					800: "#0f102e",
					900: "#070817",
				},
				third: {
					100: "#feefcc",
					200: "#fddf99",
					300: "#fbce66",
					400: "#fabe33",
					500: "#f9ae00",
					600: "#c78b00",
					700: "#956800",
					800: "#644600",
					900: "#322300",
				},
				fourth: {
					100: "#fbe2d8",
					200: "#f8c5b0",
					300: "#f4a789",
					400: "#f18a61",
					500: "#ed6d3a",
					600: "#be572e",
					700: "#8e4123",
					800: "#5f2c17",
					900: "#2f160c",
				},
				fifth: {
					100: "#eeccdf",
					200: "#dd99be",
					300: "#cb669e",
					400: "#ba337d",
					500: "#a9005d",
					600: "#87004a",
					700: "#650038",
					800: "#440025",
					900: "#220013",
				},
			},
			fontFamily: {
				primary: ["Ubuntu", "sans-serif"],
				secondary: ["var(--font-sans)", "sans-serif"],
			},
			keyframes: {
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				zoom: {
					"0%": { transform: "scale(0)" },
					"100%": { transform: "scale(1)" },
				},
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
				changeToRed: {
					"0%": {
						backgroundColor: "none",
					},
					"100%": {
						backgroundColor: "red",
					},
				},
			},
			animation: {
				"spin-slow": "spin 1s linear infinite",
				"fade-in": "fade-in 1s ease-in-out forwards",
				"change-color": "changeToRed 1s ease-in-out",
				scale: "zoom 1s ease-in-out",
			},
		},
	},
	plugins: [],
};
