'use server'
import { cookies } from 'next/headers'
import { z } from 'zod'
import { ProductSchema } from '@/types/Schemas/productSchema'

export async function getProducts() {
	const cookieStore = await cookies()
	const tokenCookie = cookieStore.get('token')
	const token = tokenCookie?.value

	const res = await fetch(`${process.env.API_URL}/shirt/:id`, {
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
