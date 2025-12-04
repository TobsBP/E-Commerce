import axios from 'axios'
import { redirect } from 'next/navigation'
import { deleteAuthToken, getAuthToken } from '../auth/cookies'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL

export const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

api.interceptors.request.use(async (request) => {
	const headers = request.headers ?? {}

	const token = await getAuthToken()

	if (token) {
		headers.Authorization = `Bearer ${token}`
	}

	request.headers = headers
	return request
})

api.interceptors.response.use(
	(response) => {
		return response
	},
	async (error) => {
		if (error.response?.status === 401) {
			await deleteAuthToken()
			redirect('/login')
		}
		return Promise.reject(error)
	}
)
