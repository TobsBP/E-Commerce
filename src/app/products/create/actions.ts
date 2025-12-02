'use server'

import { v2 as cloudinary } from 'cloudinary'
import { createShirt } from '@/lib/api/shirt'
import type { IProduct } from '@/types/Interfaces/IProduct'
import { ProductSchema } from '@/types/Schemas/productSchema'

// Cloudinary config
cloudinary.config({
	cloud_name: process.env.KEY_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
})

export async function uploadImageToCloudinary(formData: FormData) {
	const file = formData.get('file') as File

	if (!file) {
		throw new Error('Nenhum arquivo enviado')
	}

	// Convert the File to a Buffer
	const arrayBuffer = await file.arrayBuffer()
	const buffer = Buffer.from(arrayBuffer)

	// Make the upload to Cloudinary
	return new Promise<{ secure_url: string }>((resolve, reject) => {
		cloudinary.uploader
			.upload_stream(
				{ folder: 'E-Commerce/TShirts' }, // Opcional: define a folder
				(error, result) => {
					if (error) {
						reject(error)
						return
					}
					resolve(result as unknown as { secure_url: string })
				}
			)
			.end(buffer)
	})
}

export async function createProduct(productData: IProduct) {
	try {
		// Validate the product data against the schema
		const validatedData = ProductSchema.parse(productData)

		// Send the validated data to the API
		await createShirt(validatedData)

		return { success: true, message: 'Produto criado com sucesso!' }
	} catch (error) {
		console.error('Erro ao validar ou criar o produto:', error)
		return { success: false, message: 'Erro ao criar o produto.', error }
	}
}
