'use client'

import { ShoppingBag, Trash2, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useCart } from '@/hooks/useCart'
import { useProduct } from '@/hooks/useProduct'
import type { CartDrawerProps } from '@/types/Interfaces/ICartDrawerProps'

import type { Cart } from '@/types/Schemas/cartSchema'

function CartItemRow({ item }: { item: Cart['items'][number] }) {
	const id = item.shirtId || item.pantId
	const { data: product, isLoading } = useProduct(id)
	const { removeFromCart } = useCart()

	if (isLoading) {
		return (
			<div className="p-4 bg-white/5 rounded-xl border border-white/5 flex justify-center">
				<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
			</div>
		)
	}

	if (!product) return null

	const handleRemoveItem = () => {
		const data = item.shirtId
			? { shirtId: item.shirtId, quantity: item.quantity }
			: { pantId: item.pantId, quantity: item.quantity }
		removeFromCart(data)
	}

	return (
		<div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
			<div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-800">
				{product.image && (
					<Image
						src={product.image[0]}
						alt={product.name || 'Produto'}
						fill
						className="object-cover"
					/>
				)}
			</div>
			<div className="flex-1">
				<h3 className="font-medium text-white">{product.name || 'Produto indisponível'}</h3>
				<p className="text-sm text-gray-400 mb-2">{product.brand}</p>
				<div className="flex items-center justify-between">
					<div className="flex flex-col">
						<span className="text-blue-400 font-bold">R$ {Number(product.price).toFixed(2)}</span>
						<span className="text-xs text-gray-500">Qtd: {item.quantity || 1}</span>
					</div>
					<button
						type="button"
						className="text-red-400 hover:text-red-300 transition-colors p-1"
						onClick={handleRemoveItem}
					>
						<Trash2 size={18} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
	const { cart, isLoading } = useCart()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!isOpen || !mounted) return null

	const total = cart?.total || 0

	return createPortal(
		<div className="fixed inset-0 z-100 flex justify-end">
			{/* Backdrop */}
			<button
				type="button"
				tabIndex={0}
				className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
				onClick={onClose}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') onClose()
				}}
			/>

			{/* Drawer */}
			<div className="relative w-full max-w-md bg-gray-900 border-l border-white/10 h-full shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300">
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-2xl font-bold text-white flex items-center gap-2">
						<ShoppingBag className="text-blue-400" />
						Seu Carrinho
					</h2>
					<button
						type="button"
						onClick={onClose}
						className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
					>
						<X size={24} />
					</button>
				</div>

				<div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
					{isLoading ? (
						<div className="flex justify-center py-12">
							<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
						</div>
					) : !cart || cart.items.length === 0 ? (
						<div className="text-center py-12 text-gray-400">
							<p>Seu carrinho está vazio.</p>
						</div>
					) : (
						cart.items.map((item: Cart['items'][number], idx: number) => (
							<CartItemRow key={item.shirtId || item.pantId || idx} item={item} />
						))
					)}
				</div>

				{/* Footer */}
				<div className="pt-6 mt-6 border-t border-white/10">
					<div className="flex justify-between items-end mb-6">
						<span className="text-gray-400">Total</span>
						<span className="text-2xl font-bold text-white">R$ {total.toFixed(2)}</span>
					</div>
					<button
						type="button"
						className="w-full py-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
					>
						Finalizar Compra
					</button>
				</div>
			</div>
		</div>,
		document.body
	)
}
