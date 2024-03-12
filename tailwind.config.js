/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "habidazz-light-primary": '#f6f7f7', 
        "habidazz-dark-primary": '#262626',
        "habidazz-principal-gray": '#e0e9ed', 
        "habidazz-principal-orange": '#F56E0F',
        "habidazz-basic-blue": '#c1eafb', 
        "habidazz-basic-purple": '#e5bbfe', 
        "habidazz-basic-green": '#c0fbc6',
        "habidazz-basic-grayD": '#8a8a8d', 
        "habidazz-basic-grayL": '#e8e9e8', 
        "habidazz-basic-orange": '#c06884', 
        "habidazz-basic-yellow": '#fee3ba', 
        "habidazz-basic-red": '#eb3948', 
         
      },
    },
  },
  plugins: [],
}

