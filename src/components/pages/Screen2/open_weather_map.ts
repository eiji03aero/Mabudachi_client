const WEATHER_API_KEY: string = 'bbeb34ebf60ad50f7893e7440a1e2b0b'
const API_STEM: string = 'https://api.openweathermap.org/data/2.5/weather?'

function zipUrl (zip: string) {
  return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`
}

function fetchForecast (zip: string) {
  return fetch(zipUrl(zip))
}

export default { fetchForecast }
