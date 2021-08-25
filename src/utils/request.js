import axios from 'axios'

const request = axios.create({
    baseURL: '/api/welcome'
})

export default request