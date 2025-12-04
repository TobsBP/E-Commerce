'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { api } from '../api/fetch'

export async function loginRequest(email: string, password: string) {
	try {
		const { data } = await api.post('/login', { email, password })
		return data
	} catch (_error) {
		throw new Error('Credenciais inválidas')
	}
}

export async function loginAction(formData: FormData): Promise<void> {
	const email = formData.get('email') as string
	const password = formData.get('password') as string

	const loginData = await loginRequest(email, password)

	const token = loginData.token

	const cookieStore = await cookies()
	cookieStore.set('token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		path: '/',
		sameSite: 'lax',
	})

	const savedToken = cookieStore.get('token')

	if (savedToken) {
		redirect('/products')
	} else {
		throw new Error('Sem Token de login')
	}
}

export async function logoutAction() {
	;(await cookies()).delete('token')
	redirect('/login')
}
