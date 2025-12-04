import { useQuery } from '@tanstack/react-query'
import { getPant } from '@/lib/api/pant'
import { getShirt } from '@/lib/api/shirt'

export function useProduct(id: string) {
	return useQuery({
		queryKey: ['product', id],
		queryFn: async () => {
			const shirt = await getShirt(id)
			if (shirt) return shirt
			const pant = await getPant(id)
			return pant || null
		},
		enabled: !!id,
	})
}
