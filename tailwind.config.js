/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Somar-Black': ['Somar-Black'],
        'Somar-BlackItalic': ['Somar-BlackItalic'],
        'Somar-Bold': ['Somar-Bold'],
        'Somar-BoldItalic': ['Somar-BoldItalic'],
        'Somar-ExtraBold': ['Somar-ExtraBold'],
        'Somar-ExtraLight': ['Somar-ExtraLight'],
        'Somar-ExtraBoldItalic': ['Somar-ExtraBoldItalic'],
        'Somar-ExtraLightItalic': ['Somar-ExtraLightItalic'],
        'Somar-Light': ['Somar-Light'],
        'Somar-LightItalic': ['Somar-LightItalic'],
        'Somar-Medium': ['Somar-Medium'],
        'Somar-MediumItalic': ['Somar-MediumItalic'],
        'Somar-Regular': ['Somar-Regular'],
        'Somar-RegularItalic': ['Somar-RegularItalic'],
        'Somar-SemiBold': ['Somar-SemiBold'],
        'Somar-SemiBoldItalic': ['Somar-SemiBoldItalic'],
        'Somar-Thin': ['Somar-Thin'],
        'Somar-ThinItalic': ['Somar-ThinItalic'],
      },
      colors: {
        primary: '#035AA7',
        secondry: '#183C6C',
        danger: '#EA676C',
      },
    },
  },
  plugins: [],
}
