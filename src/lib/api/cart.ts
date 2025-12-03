'use server'

import { getAuthToken } from '@/lib/auth/cookies'
import { CartSchema } from '@/types/Schemas/cartSchema'

export async function getCart() {
	const token = await getAuthToken()
	const res = await fetch(`${process.env.API_URL}/cart`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
		cache: 'no-store',
	})

	if (!res.ok) {
		throw new Error('Erro ao buscar produtos')
	}

	return CartSchema.parse(await res.json())
}

export async function addToCart(shirtId: string, quantity: number) {
	const token = await getAuthToken()
	if (!token) {
		throw new Error('Usuário não autenticado.')
	}

	const res = await fetch(`${process.env.API_URL}/cart`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			shirtId,
			quantity,
		}),
	})

	if (!res.ok) {
		const errorData = await res.json() // Attempt to read error message from API
		throw new Error(errorData.message || 'Erro ao adicionar item ao carrinho.')
	}

	return res.json() // Return updated cart or success message
}

export async function removeFromCart(shirtId: string, quantity: number) {
	const token = await getAuthToken()

	if (!token) {
		throw new Error('Usuário não autenticado.')
	}

	const res = await fetch(`${process.env.API_URL}/cart`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			shirtId: shirtId,
			quantity: quantity,
		}),
	})

	if (!res.ok) {
		const errorData = await res.json()
		throw new Error(errorData.message || 'Erro ao remover item do carrinho.')
	}

	return res.json()
}
