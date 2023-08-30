import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': {
              content: "''",
            },
            'a':{

            },
            'img': {
              margin: '24px 0px',
              width: "650px",
              borderRadius: "0.5rem",
            },
            'h2':{
              marginTop: '0',
            },
            'code::before': {
              content: "''",
            },
            'code::after': {
              content: "''",
            },
            'code': {
              'padding': '5px',
              'backgroundColor': '#e5e7eb',
              'borderRadius': "0.5rem",
            },
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
