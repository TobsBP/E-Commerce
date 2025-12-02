'use server'

import { z } from 'zod'
import { getAuthToken } from '@/lib/auth/cookies'
import { ProductSchema } from '@/types/Schemas/productSchema'

export async function getShirts() {
	const token = await getAuthToken()
	const res = await fetch(`${process.env.API_URL}/shirts`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
		cache: 'no-store',
	})

	if (!res.ok) {
		throw new Error('Erro ao buscar produtos')
	}

	return z.array(ProductSchema).parse(await res.json())
}

export async function getShirt(id: string) {
	const token = await getAuthToken()
	const res = await fetch(`${process.env.API_URL}/shirt/${id}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
		cache: 'no-store',
	})

	if (!res.ok) {
		throw new Error('Erro ao buscar produtos')
	}

	return ProductSchema.parse(await res.json())
}

export async function createShirt(productData: z.infer<typeof ProductSchema>) {
	const token = await getAuthToken()
	const res = await fetch(`${process.env.API_URL}/shirt`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(productData),
	})

	if (!res.ok) {
		throw new Error('Erro ao criar produto')
	}

	return await res.json()
}
