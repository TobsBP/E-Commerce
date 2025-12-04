'use server'

import { v2 as cloudinary } from 'cloudinary'

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
