import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  extend: {
    colors: {
     primary: '#DC143C',
     'primary-text': '#1c1917',
     'gradient-radial': 'radial-gradient(#DC143C, #FFFFFF)',
     'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, #DC143C, #FFFFFF)',
    }
  },
  },
  plugins: [],
}
export default config
