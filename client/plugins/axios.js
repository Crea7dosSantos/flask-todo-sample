import Axios from 'axios'

let axiosDefault = Axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responsetype: 'json'
})

export default axiosDefault
