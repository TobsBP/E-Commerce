import { api } from '../api/fetch'

export async function registerAction(formData: FormData): Promise<void> {
	const email = formData.get('email')
	const name = formData.get('name')
	const password = formData.get('password') as string
	const confirmPassword = formData.get('confirmPassword') as string
	const role = formData.get('role')

	if (password !== confirmPassword) {
		throw new Error('As senhas não coincidem')
	}

	if (
		typeof email !== 'string' ||
		typeof password !== 'string' ||
		typeof role !== 'string' ||
		typeof name !== 'string'
	) {
		throw new Error('Campos inválidos')
	}

	const registerData = (await registerRequest(email, name, password, role)) as string

	if (!registerData) {
		throw new Error('User not created')
	}
}

export async function registerRequest(email: string, name: string, password: string, role: string) {
	try {
		const { data } = await api.post('/register', { name, email, password, role })
		return data
	} catch (_error) {
		throw new Error('Failed to register user')
	}
}
