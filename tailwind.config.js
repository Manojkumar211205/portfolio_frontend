/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0B0B0B",
                foreground: "#E5E7EB", // Softer white for readable text
                heading: "#FFFFFF", // Pure white for headings
                muted: "#9CA3AF", // Gray for secondary text
                primary: "#22D3EE",
                secondary: "#22D3EE",
                card: "rgba(255, 255, 255, 0.05)",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
