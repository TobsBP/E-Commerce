'use server'

import { getAuthToken } from '@/lib/auth/cookies'

export async function getUser(id: string) {
	const token = await getAuthToken()
	const res = await fetch(`${process.env.API_URL}/user/${id}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
		cache: 'no-store',
	})

	if (!res.ok) {
		console.error(`Failed to fetch user ${id}: ${res.status} ${res.statusText}`)
		return null
	}

	return await res.json()
}
