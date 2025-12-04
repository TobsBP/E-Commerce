import { z } from 'zod'

export const CartSchema = z.object({
	items: z.array(
		z.object({
			shirtId: z.string().optional(),
			pantId: z.string().optional(),
			quantity: z.number(),
			price: z.number(),
		})
	),
	total: z.number(),
})

export const CartData = z.object({
	shirtId: z.string().optional(),
	pantId: z.string().optional(),
	quantity: z.number(),
})

export type Cart = z.infer<typeof CartSchema>
export type CartData = z.infer<typeof CartData>
