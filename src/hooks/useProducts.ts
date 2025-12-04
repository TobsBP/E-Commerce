import { useQuery } from '@tanstack/react-query'
import { getPants } from '@/lib/api/pant'
import { getShirts } from '@/lib/api/shirt'

export function useProducts() {
	return useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const [shirts, pants] = await Promise.all([getShirts(), getPants()])
			return [...shirts, ...pants]
		},
	})
}
