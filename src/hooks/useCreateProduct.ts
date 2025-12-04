import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPant } from '@/lib/api/pant'
import { createShirt } from '@/lib/api/shirt'
import type { CreateProductInput } from '@/types/Schemas/productSchema'

export function useCreateProduct() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (data: CreateProductInput) => {
			if (data.category === 'calcas') {
				return createPant(data)
			}
			return createShirt(data)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['products'] })
		},
	})
}
