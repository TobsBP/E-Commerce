'use server'

import axios from 'axios'
import { z } from 'zod'
import { type CreateProductInput, ProductSchema } from '@/types/Schemas/productSchema'
import { api } from './fetch'

export async function getShirts() {
	try {
		const { data } = await api.get('/shirts')
		return z.array(ProductSchema).parse(data)
	} catch (error) {
		console.error('Erro em getShirts:', error)
		throw new Error('Erro ao buscar produtos')
	}
}

export async function getShirt(id: string) {
	try {
		const { data } = await api.get(`/shirt/${id}`)

		return ProductSchema.parse(data)
	} catch (error) {
		if (axios.isAxiosError(error) && error.response?.status === 404) {
			return null
		}
		console.error('Erro em getShirt:', error)
		throw new Error('Erro ao buscar produto')
	}
}

export async function createShirt(productData: CreateProductInput) {
	try {
		const { data } = await api.post('/shirt', productData)

		return data
	} catch (error) {
		console.error('Erro em createShirt:', error)
		throw new Error('Erro ao criar produto')
	}
}
