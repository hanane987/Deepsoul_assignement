/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
            light: "#002379",
            dark: "#001a5c",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
            light: "#fffae6",
            dark: "#001a5c",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
            dark: "#001a5c",
            DEFAULT: "#002379",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          navy: {
            50: "#e6eaf0",
            100: "#ccd5e1",
            200: "#99abc3",
            300: "#6681a5",
            400: "#335787",
            500: "#002d69",
            600: "#001f4d",
            700: "#001845",
            800: "#001233",
            900: "#000c2b",
          },
          orange: {
            50: "#fff5f0",
            100: "#ffebe1",
            200: "#ffd7c3",
            300: "#ffc3a5",
            400: "#ffaf87",
            500: "#ff9b69",
            600: "#ff9966",
            700: "#ff8c4d",
            800: "#ff7e33",
            900: "#ff701a",
          },
          peach: {
            50: "#fff9f5",
            100: "#fff3eb",
            200: "#ffe7d7",
            300: "#ffdbc3",
            400: "#ffcfaf",
            500: "#ffc39b",
            600: "#ffbb99",
            700: "#ffad85",
            800: "#ff9f71",
            900: "#ff915d",
          },
          cream: {
            50: "#fffdf5",
            100: "#fffceb",
            200: "#fffae6",
            300: "#fff7d6",
            400: "#fff5c7",
            500: "#fff2b8",
            600: "#ccc293",
            700: "#99916e",
            800: "#66614a",
            900: "#333025",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        animation: {
          "gradient-x": "gradient-x 10s ease infinite",
          "gradient-y": "gradient-y 10s ease infinite",
          "gradient-xy": "gradient-xy 10s ease infinite",
          "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          "bounce-slow": "bounce 3s infinite",
          "spin-slow": "spin 3s linear infinite",
          float: "float 6s ease-in-out infinite",
          floating: "floating 5s ease-in-out infinite",
        },
        keyframes: {
          "gradient-y": {
            "0%, 100%": {
              "background-size": "400% 400%",
              "background-position": "center top",
            },
            "50%": {
              "background-size": "200% 200%",
              "background-position": "center center",
            },
          },
          "gradient-x": {
            "0%, 100%": {
              "background-size": "200% 200%",
              "background-position": "left center",
            },
            "50%": {
              "background-size": "200% 200%",
              "background-position": "right center",
            },
          },
          "gradient-xy": {
            "0%, 100%": {
              "background-size": "400% 400%",
              "background-position": "left center",
            },
            "50%": {
              "background-size": "200% 200%",
              "background-position": "right center",
            },
          },
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  