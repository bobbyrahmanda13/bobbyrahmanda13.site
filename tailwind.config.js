module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F2FF2',
          black: '#19212E',
          white: '#EEEEEE',
          gray: '#AAAAAA',
        },
      },
    },
  },
  plugins: [],
};
