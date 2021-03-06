import axios from 'axios'

const API_URL = `http://10.192.3.37:3001/api`

const request = async (url, method = 'get', data = null, headers = null) => {
  const res = await axios[method](`${API_URL}/${url}`, data, headers)
  return res.data
}

export default request
