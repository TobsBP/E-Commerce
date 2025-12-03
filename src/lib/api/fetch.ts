import axios from 'axios'
import { getAuthToken } from '../auth/cookies'

const API_BASE_URL = process.env.API_URL

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
		const originalRequest = error.config

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true
			console.log('Unauthorized - attempting to refresh token...')

			try {
				const newToken = await getAuthToken()
				originalRequest.headers.Authorization = `Bearer ${newToken}`

				if (!newToken) {
					throw new Error('Token refresh logic not implemented.')
				}

				return api(originalRequest)
			} catch (refreshError: unknown) {
				console.error('Failed to refresh token:', refreshError)
				// TODO: Implement sign-out logic
				// Example: yourAuthService.signOut();
				// TODO: Implement redirection to login page
				// Example: router.push('/login');
				return Promise.reject(refreshError)
			}
		}
		return Promise.reject(error)
	}
)
