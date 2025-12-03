import { api } from '../api/fetch'

export async function registerRequest(email: string, name: string, password: string, role: string) {
	try {
		const { data } = await api.post('/register', { name, email, password, role })
		return data
	} catch (_error) {
		throw new Error('Failed to register user')
	}
}
