import axios from 'axios'

const ApiService = axios.create({
	baseURL: process.env.REACT_APP_API_BLOG_BASE_URL,
	withCredentials: true,
	timeout: 12000
})

export default ApiService
