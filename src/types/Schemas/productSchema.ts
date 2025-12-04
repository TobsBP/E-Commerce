import { z } from 'zod'

export const ProductSchema = z.object({
	id: z.string(),
	name: z.string(),
	brand: z.string(),
	price: z.number(),
	image: z.array(z.string()),
	rating: z.number(),
	reviews: z.number(),
	colors: z.array(z.string()),
	sizes: z.array(z.string()),
	description: z.string(),
	features: z.array(z.string()),
	category: z.string(),
	stock: z.number(),
})

export const CreateProductSchema = ProductSchema.omit({ id: true })

export type Product = z.infer<typeof ProductSchema>
export type CreateProductInput = z.infer<typeof CreateProductSchema>
