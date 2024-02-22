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
            'maxWidth': '640px',
            'blockquote p:first-of-type::before': {
              content: "''",
            },
            '.w-640':{
              maxWidth: '640px'
            },
            'blockquote' :{
              'border-left': '0.25rem solid #fcd34d',
            },
            'li': {
              color: 'white',
            },
            'li::marker' :{
              'color': 'white',
            },
            'a':{
              'color': '#0072F5',
              textDecoration: 'wavy underline',
              '&:hover': {
                'color': '#fcd34d',
              }
            },
            'img': {
              margin: '24px 0px',
              borderRadius: "0.5rem",
            },
            'h1':{
              color: '#fbbf24',
            },
            'h3':{
              color: '#fde68a',
            },
            'h2':{
              margin: '32px 0 12px',
              fontSize: '28px',
              color: '#fcd34d',
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
              'backgroundColor': '#262626',
              'borderRadius': "0.5rem",
              'color': '#f87171'
            },
            'ul': {

            },
            'small': {
              color: '#d4d4d4',
            },
            'p': {
              color: '#FFFFFF',
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
