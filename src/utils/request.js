import axios from 'axios'

const request = axios.create({
    baseURL: 'http://101.200.227.216:8888/api/welcome'
})

export default request