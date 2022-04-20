import axios from 'axios'

const API_URL = `${process.env.BASE_API}`

const request = async (url, method = 'get', data = null, headers = null) => {
  const res = await axios[method](`${API_URL}/${url}`, data, headers)
  return res.data
}

export default request
