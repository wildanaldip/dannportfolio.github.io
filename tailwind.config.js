/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', 'node_modules/preline/dist/*.js'],
    theme: {
        container: {
            center: true,
            padding: '16px'
        },

        extend: {
            colors: {
                primary: '#14b8a6',
                dark: '#0f172a',
                card: '#F8F8F8',
            },
            screens: {
                '2xl': '1320px',
            }
        },
    },
    plugins: [require('preline/plugin'), ],
}