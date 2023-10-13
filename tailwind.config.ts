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
            // '*': {
            //   color: 'white',
            // },
            'blockquote p:first-of-type::before': {
              content: "''",
            },
            'blockquote' :{
              'border-left': '0.25rem solid #f87171',
            },
            'li': {
              color: 'white',
            },
            'li::marker' :{
              'color': 'white',
            },
            'a':{
              'color': '#f87171',
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
            'h1':{
              color: '#f87171'
            },
            'h2':{
              color: 'white',
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
              'backgroundColor': 'white',
              'borderRadius': "0.5rem",
              'color': '#f87171',
            },
            'ul': {

            },
            'p': {
              color: 'white',
              '&>code':{ // 인용문 안에 있는 code 색 변경
                color: '#f87171',
              }
            },
            'cite':{
              color : 'grey',
              'font-size': '0.85rem',
              'display': 'block',
              'text-align': 'center',
              'overflow-x': 'auto', // 모바일 버전에서 url이 너무 길 경우 대비
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
