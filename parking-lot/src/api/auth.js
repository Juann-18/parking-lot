import axios from 'axios'

const API = 'http://localhost:4000/api'

export const registerRequest = (car) => axios.post(`${API}/register`, car );
export const exitRequest = (car) => axios.post(`${API}/exit`, car);