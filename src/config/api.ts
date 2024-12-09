import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_AUTH_USERNAME,
    password: import.meta.env.VITE_API_AUTH_PASSWORD
  },
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*'
  }
})
