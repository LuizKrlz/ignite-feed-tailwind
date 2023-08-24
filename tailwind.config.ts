import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        danger: '#F75A68',
        gray1: '#121214',
        gray2: '#202024',
        gray3: '#323238',
        gray4: '#7C7C8A',
        gray5 : '#8D8D99',
        gray6: '#C4C4CC',
        gray7: '#E1E1E6',
        greenBase: '#00875F',
        greenLight: '#00B37E'
      },
      screens: {
        'lg': '1158px'
      }
    },
  },
  plugins: [],
}
export default config
