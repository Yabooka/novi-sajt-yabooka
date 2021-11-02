module.exports = {
  mode: 'jit',
  important: true,
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
      },
      fontWeight: {
        TH: 200,
        NR: 300,
        SB: 600,
        BO: 800,
      },
      fontSize: {
        '7xl': '4.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
