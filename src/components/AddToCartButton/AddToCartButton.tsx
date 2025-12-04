'use client'

import { Check, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/hooks/useCart'

interface AddToCartButtonProps {
	productId: string
	category: string
}

export default function AddToCartButton({ productId, category }: AddToCartButtonProps) {
	const { addToCart } = useCart()
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)

	async function handleAddToCart() {
		if (!productId) {
			alert('Erro: ID do produto inválido')
			return
		}
		setLoading(true)
		try {
			const payload =
				category === 'calcas'
					? { pantId: productId, quantity: 1 }
					: { shirtId: productId, quantity: 1 }

			await addToCart(payload)
			setSuccess(true)
			// Reset success message after 2 seconds
			setTimeout(() => setSuccess(false), 2000)
		} catch (error) {
			console.error(error)
			alert('Erro ao adicionar ao carrinho')
		} finally {
			setLoading(false)
		}
	}

	return (
		<button
			type="button"
			onClick={handleAddToCart}
			disabled={loading || success}
			className={`flex-1 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 text-white
        ${
					success
						? 'bg-green-500 shadow-green-500/50'
						: 'bg-linear-to-r from-blue-500 to-purple-600 hover:shadow-purple-500/50'
				}
        ${loading ? 'opacity-80 cursor-not-allowed' : ''}
      `}
		>
			{loading ? (
				<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
			) : success ? (
				<>
					<Check size={20} />
					Adicionado!
				</>
			) : (
				<>
					<ShoppingCart size={20} />
					Adicionar ao Carrinho
				</>
			)}
		</button>
	)
}
