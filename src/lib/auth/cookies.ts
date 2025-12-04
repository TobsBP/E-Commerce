'use server'

import { cookies } from 'next/headers'

export async function getAuthToken() {
	const cookieStore = await cookies()
	const tokenCookie = cookieStore.get('token')
	const token = tokenCookie?.value

	return token
}

export async function deleteAuthToken() {
	const cookieStore = await cookies()
	cookieStore.delete('token')
}
