/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xmd: '420px',
        // xsm: { min: '360px', max: '639px' },
        // sm: { min: '640px', max: '767px' },
        // md: { min: '768px', max: '1023px' },
        // lg: { min: '1024px', max: '1279px' },
        // xlg: { min: '1280px', max: '1920px' },
        // '2xlg': { min: '1921px', max: '1935px' },
      },

      // opacity: ['disabled'],
      colors: {
        primary: '#003876',
        secondary: '#707070',
        secondary2: '#F0F0F0',
        terciario: '#479F7D',
        accent: '#00B0F0',
        danger: '#DE1C28',
        danger2: '#FF0F00',
        success: '#3ACF91',
        warning: '#FFC107',
        purple: '#E2D6FF',
        statistic: '#FFFFFF',
        azulcolo: '#003876',
        bordepanel: '#AF562C',
      },
      fontFamily: {
        // roboto: ['Roboto', 'sans'],
        // inter: ['Inter', 'sans'],
        custom: ['DigitalNumbersRegular', 'sans'],
        roboto: ['Roboto', 'sans-serif'],
        // inter: ['sans-serif'],
        inter: ['Inter', 'sans'],
      },
    },
  },
  plugins: [],
};
