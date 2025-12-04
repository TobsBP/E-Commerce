import { useMutation } from '@tanstack/react-query'
import { api } from '@/lib/api/fetch'

export function useGetShirts() {
	return useMutation({
		mutationFn: async () => {
			const response = await api.get('/shirts', {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			return response.data
		},
	})
}
