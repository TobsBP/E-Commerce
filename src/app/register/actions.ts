'use server'

import { registerRequest } from '@/lib/auth/register'

export async function registerAction(formData: FormData): Promise<void> {
	const email = formData.get('email')
	const password = formData.get('password') as string
	const confirmPassword = formData.get('confirmPassword') as string
	const role = formData.get('role')

	if (password != confirmPassword) {
		throw new Error('As senhas não coincidem')
	}

	if (typeof email !== 'string' || typeof password !== 'string' || typeof role !== 'string') {
		throw new Error('Campos inválidos')
	}

	const registerData = (await registerRequest(email, password, role)) as string

	if (!registerData) {
		throw new Error('User not created')
	}
}
