'use server'

import type { CartData } from '@/types/Schemas/cartSchema'
import { CartSchema } from '@/types/Schemas/cartSchema'
import { api } from './fetch'

export async function getCart() {
	try {
		const { data } = await api.get('/cart')
		return CartSchema.parse(data)
	} catch (_error) {
		throw new Error('Erro ao buscar produtos')
	}
}

export async function addToCart(data: CartData) {
	try {
		const response = await api.post('/cart', data)
		return response.data
	} catch (error: unknown) {
		console.error('Error adding item to cart:', error)
		const errorMessage =
			(error as any).response?.data?.message ||
			(error as any).response?.data?.error ||
			(error as any).message ||
			'Erro desconhecido'
		throw new Error(`Erro ao adicionar item ao carrinho: ${errorMessage}`)
	}
}

export async function removeFromCart(data: CartData) {
	try {
		const response = await api.delete('/cart', { data })
		return response.data
	} catch (error: unknown) {
		console.error('Error removing item from cart:', error)
		throw new Error('Erro ao remover item ao carrinho.')
	}
}
