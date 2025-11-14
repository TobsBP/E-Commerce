'use client'

import ProductCard from '@/components/ProductCard'
import { useState, useEffect } from 'react'
import { getProducts } from '@/lib/api/products'

export default function ProductsPage() {
	const [query, setQuery] = useState('')
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		async function fetchProducts() {
			try {
				const data = await getProducts()
				setProducts(data)
			} catch (err) {
				setError(err as any)
			} finally {
				setLoading(false)
			}
		}
		fetchProducts()
	}, [])

	const filtered = products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))

	if (loading) {
		return (
			<div className="min-h-screen bg-gray-900 flex items-center justify-center">
				<p className="text-white text-xl">Carregando produtos...</p>
			</div>
		)
	}

	if (error) {
		return (
			<div className="min-h-screen bg-gray-900 flex items-center justify-center">
				<p className="text-red-500 text-xl">Erro ao carregar produtos: {error.message}</p>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gray-900">
			<div className="pt-30 min-h bg-gray-900 text-white flex justify-center px-6">
				<div className="w-full max-w-3xl bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 mt-10 shadow-xl">
					<h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600 mb-6">
						Produtos
					</h1>

					<input
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Pesquisar produtos..."
						className="w-full mb-6 bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 transition"
					/>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{filtered.map((p, index) => (
							<ProductCard key={index} {...p} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
