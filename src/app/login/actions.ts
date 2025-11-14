'use server'

import { cookies } from 'next/headers'
import { loginRequest } from '@/lib/auth/login'
import { redirect } from 'next/navigation'

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
}
