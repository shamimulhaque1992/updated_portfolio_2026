const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        foreground: {
          light: "#0d0f14",
          dark: "#ECDFCC",
        },
        accent: {
          light: "#0077C0",
          dark: "#697565",
        },
      },
      boxShadow: {
        glow: "0 32px 120px rgba(0, 119, 192, 0.12)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

module.exports = config;
