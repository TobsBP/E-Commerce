import { z } from 'zod'

export const CartSchema = z.object({
	items: z.array(
		z.object({
			shirtId: z.string(),
			quantity: z.number(),
			price: z.number(),
		})
	),
	total: z.number(),
})

export type Cart = z.infer<typeof CartSchema>
