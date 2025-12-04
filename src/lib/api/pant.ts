import axios from 'axios'
import { z } from 'zod'
import type { IProduct } from '@/types/Interfaces/IProduct'
import { ProductSchema } from '@/types/Schemas/productSchema'
import { api } from './fetch'

interface RawProductData extends Omit<IProduct, 'id'> {
	_id?: string
	id?: string
}

export async function getPants() {
	try {
		const { data } = await api.get('/pants')
		const formattedData = data.map((item: RawProductData) => ({
			...item,
			id: item._id || item.id, // Ensure id is always present
		}))

		return z.array(ProductSchema).parse(formattedData)
	} catch (error) {
		console.error('Erro em getPants:', error)
		throw new Error('Erro ao buscar calças')
	}
}

export async function getPant(id: string) {
	try {
		const { data } = await api.get(`/pant/${id}`)
		const formattedData: RawProductData = { ...data, id: data._id || data.id }
		return ProductSchema.parse(formattedData)
	} catch (error) {
		if (axios.isAxiosError(error) && error.response?.status === 404) {
			return null
		}
		console.error('Erro em getPant:', error)
		throw new Error('Erro ao buscar calça')
	}
}

export async function createPant(pantData: Omit<IProduct, 'id'>): Promise<IProduct> {
	try {
		const response = await api.post('/pant', pantData)

		return response.data
	} catch (error) {
		console.error('Error creating pant product:', error)
		throw error
	}
}

export async function updatePant(
	id: string,
	pantData: Partial<Omit<IProduct, 'id'>>
): Promise<IProduct> {
	try {
		const response = await api.put(`/pant/${id}`, pantData)
		return response.data
	} catch (error) {
		console.error('Error updating pant product:', error)
		throw error
	}
}
