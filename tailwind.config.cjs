/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
            serif: ["Vollkorn", "serif"],
        },
        fontSize: {
            xs: "0.75rem",
            sm: "0.8rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
        },
        extend: {
            colors: {
                primary: {
                    50: "#CEC9E1",
                    200: "#AD97FF",
                    300: "#5B4A9A",
                    400: "#6440E8",
                    500: "#3F3D56",
                    DEFAULT: "#5B4A9A",
                },
                secondary: {
                    50: "#FEE6E0",
                    300: "#FDAB96",
                    500: "#FD7C5F",
                    DEFAULT: "#FD7C5F",
                },
            },
            animation: {
                toast: "fade 1s linear 1s forwards",
            },
            keyframes: {
                fade: {
                    "0%": { opacity: 1 },
                    "100%": { opacity: 0 },
                },
            },
            spacing: {
                "1/1.5": "66.666667%",
                "1/3": "33.333333%",
                "1/5": "20%",
                "1/6": "16.666667%",
                "1/10": "10%",
            },
            zIndex: {
                60: "60",
                70: "70",
                80: "80",
                90: "90",
                100: "100",
                200: "200",
                300: "300",
                400: "400",
                500: "500",
                600: "600",
                700: "700",
                800: "800",
                900: "900",
                1000: "1000",
            },
            width: {
                "91": "22rem",
                100: "25rem",
                150: "37.5rem",
                200: "50rem",
                250: "62.5rem",
                300: "75rem",
            },
            height: {
                100: "25rem",
                150: "37.5rem",
                200: "50rem",
                250: "62.5rem",
                300: "75rem",
            },
        },
    },
    plugins: [],
};
