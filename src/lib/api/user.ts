'use server'

import { api } from './fetch'

export async function getUser(id: string) {
	try {
		const { data } = await api.get(`/user/${id}`)
		return data
	} catch (error) {
		console.error(`Failed to fetch user ${id}:`, error)
		return null
	}
}
