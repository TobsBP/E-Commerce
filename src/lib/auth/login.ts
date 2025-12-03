import { api } from '../api/fetch'

export async function loginRequest(email: string, password: string) {
	try {
		const { data } = await api.post('/login', { email, password })
		return data
	} catch (_error) {
		throw new Error('Credenciais inválidas')
	}
}
