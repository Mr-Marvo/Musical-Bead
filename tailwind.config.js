module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-back': "url('/src/assets/images/landingpage/main-bg.png')",
        'tag-bottom': "url('/src/assets/images/landingpage/tag_bottom.png')",
        'signup-back': "url('/src/assets/images/system/signup-back.png')"
      },
      colors: {
        teal: "#2AAFC1",
        "dark-teal": "#0A525B",
      },
      screens: {
        xxs: "320px",
        xs: "375px",
        sl: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "2.5xl": "1536px",
        "3xl": "1960px",
        "4xl": "2560px",
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'nunito': ['Nunito']
    }
  },
  plugins: [],
};
