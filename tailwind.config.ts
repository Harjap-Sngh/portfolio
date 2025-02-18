import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        movement: "movement 2s ease-in-out infinite",
        projectCards: "projectCards 2s ease-in-out infinite",
        fadeIn: "fadeIn 2s ease-out forwards",
        borderExpand: "borderExpand 1s ease-out forwards",
        borderContract: "borderContract 1s ease-out forwards",
        shine: "shine 5s linear infinite",
        wave: "wave 2.5s ease-in-out infinite",
      },
      keyframes: {
        movement: {
          "0%, 100%": { transform: "translateY(0px) translateX(2px)" },
          "50%": { transform: "translateY(10px) translateX(-10px)" },
        },
        projectCards: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", clipPath: "inset(0 0 100% 0)" }, // Start fully hidden
          "100%": { opacity: "1", clipPath: "inset(0 0 0 0)" }, // Fully visible
        },
        borderExpand: {
          "0%": { height: "0px" }, // Start with no border
          "100%": { height: "250px" }, // Adjust the thickness of the border here
        },
        borderContract: {
          "0%": { height: "380px" }, // Start with a thick border
          "100%": { height: "40px" }, // End with no border
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        wave: {
          "0%": { transform: "rotateY(0deg) rotateZ(0deg)" },
          "10%": { transform: "rotateY(14deg) rotateZ(5deg)" },
          "20%": { transform: "rotateY(-8deg) rotateZ(-5deg)" },
          "30%": { transform: "rotateY(14deg) rotateZ(5deg)" },
          "40%": { transform: "rotateY(-4deg) rotateZ(-4deg)" },
          "50%": { transform: "rotateY(10deg) rotateZ(4deg)" },
          "60%": { transform: "rotateY(0deg) rotateZ(0deg)" },
          "100%": { transform: "rotateY(0deg) rotateZ(0deg)" },
        },
      },
      transformOrigin: {
        "70-70": "70% 70%", // Center pivot
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
