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
            'blockquote' :{
              'border-left': '0.25rem solid #b91c1c',
            },
            'li::marker' :{
              'color': '#b91c1c',
            },
            'a':{
              'color': '#b91c1c',
              textDecoration: 'wavy underline',
              '&:hover': {
                'color': 'red',
              }
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
              'padding': '3px',
              'font-weight': '400',
              'backgroundColor': '#d1d5db',
              'borderRadius': "0.5rem",
              'color': '#b91c1c',
            },
            'ul': {

            }
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
