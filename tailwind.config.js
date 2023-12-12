/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "backgroundsdark-cards": "var(--backgroundsdark-cards)",
        "backgroundsdark-mode": "var(--backgroundsdark-mode)",
        "backgroundsdark-theme": "var(--backgroundsdark-theme)",
        black: "var(--black)",
        "dark-gray": "var(--dark-gray)",
        "dark-themegreen": "var(--dark-themegreen)",
        "dark-themeorange": "var(--dark-themeorange)",
        "dark-themepurple": "var(--dark-themepurple)",
        "dark-themered": "var(--dark-themered)",
        "dark-themeyellow": "var(--dark-themeyellow)",
        gray: "var(--gray)",
        "grayscale-black": "var(--grayscale-black)",
        "light-themedark-green": "var(--light-themedark-green)",
        "light-themedark-orange": "var(--light-themedark-orange)",
        "light-themedark-purple": "var(--light-themedark-purple)",
        "light-themedark-red": "var(--light-themedark-red)",
        "light-themedark-yellow": "var(--light-themedark-yellow)",
        white: "var(--white)",
      },
      fontFamily: {
        "chart-titles-chart-title-l": "var(--chart-titles-chart-title-l-font-family)",
        "chart-titles-chart-title-m": "var(--chart-titles-chart-title-m-font-family)",
        "chart-titles-chart-title-s": "var(--chart-titles-chart-title-s-font-family)",
        "text-large-text": "var(--text-large-text-font-family)",
        "text-medium-text": "var(--text-medium-text-font-family)",
        "text-small-text": "var(--text-small-text-font-family)",
      },
    },
  },
  plugins: [],
};
