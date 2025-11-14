'use server'
import { cookies } from 'next/headers'
import { ProductSchema } from '@/types/Schemas/productSchema'
import { z } from 'zod'

export async function getProducts() {
	const cookieStore = await cookies()
	const tokenCookie = cookieStore.get('token')
	const token = tokenCookie?.value

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
