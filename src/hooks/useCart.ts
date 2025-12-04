import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addToCart, getCart, removeFromCart } from '@/lib/api/cart'

export function useCart() {
	const queryClient = useQueryClient()

	const cartQuery = useQuery({
		queryKey: ['cart'],
		queryFn: getCart,
	})

	const addMutation = useMutation({
		mutationFn: addToCart,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})

	const removeMutation = useMutation({
		mutationFn: removeFromCart,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})

	return {
		cart: cartQuery.data,
		isLoading: cartQuery.isLoading,
		isError: cartQuery.isError,
		addToCart: addMutation.mutateAsync,
		removeFromCart: removeMutation.mutateAsync,
		isAdding: addMutation.isPending,
		isRemoving: removeMutation.isPending,
	}
}
