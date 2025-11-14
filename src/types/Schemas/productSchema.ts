// src/types/Schemas/productSchema.ts
import { z } from 'zod'

export const ProductSchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	brand: z.string(),
	size: z.string(),
	price: z.number(),
	stock: z.number(),
	color: z.string(),
	category: z.string(),
	material: z.string(),
	gender: z.string(),
})

export type Product = z.infer<typeof ProductSchema>
