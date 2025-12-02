'use client'

import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { getShirts } from '@/lib/api/shirt'
import type { Product } from '@/types/Schemas/productSchema'

export default function ProductsPage() {
	const [query, setQuery] = useState('')
	const [products, setProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [currentPage, setCurrentPage] = useState(1)
	const ITEMS_PER_PAGE = 15

	useEffect(() => {
		async function fetchProducts() {
			try {
				const data = await getShirts()
				setProducts(data)
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError('Erro desconhecido')
				}
			} finally {
				setLoading(false)
			}
		}
		fetchProducts()
	}, [])

	// Reset page when search query changes
	useEffect(() => {
		setCurrentPage(1)
	}, [])

	const filtered = products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))

	// Pagination logic
	const indexOfLastItem = currentPage * ITEMS_PER_PAGE
	const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
	const currentProducts = filtered.slice(indexOfFirstItem, indexOfLastItem)
	const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

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
				<p className="text-red-500 text-xl">Erro ao carregar produtos: {error}</p>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gray-900 pb-12">
			<div className="pt-24 min-h bg-gray-900 text-white flex justify-center px-6">
				<div className="w-full max-w-7xl bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
					<h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600 mb-6">
						Produtos
					</h1>

					<input
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Pesquisar produtos..."
						className="w-full mb-6 bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 transition"
					/>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
						{currentProducts.map((p, index) => {
							const globalIndex = indexOfFirstItem + index
							return <ProductCard key={p.id ?? p.name} {...p} id={globalIndex.toString()} />
						})}
					</div>

					{/* Pagination Controls */}
					{totalPages > 1 && (
						<div className="flex justify-center items-center gap-2 mt-8">
							<button
								type="button"
								onClick={() => paginate(currentPage - 1)}
								disabled={currentPage === 1}
								className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
							>
								Anterior
							</button>

							{Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
								<button
									type="button"
									key={number}
									onClick={() => paginate(number)}
									className={`w-10 h-10 rounded-lg font-medium transition ${
										currentPage === number
											? 'bg-blue-600 text-white'
											: 'bg-gray-700 hover:bg-gray-600 text-gray-300'
									}`}
								>
									{number}
								</button>
							))}

							<button
								type="button"
								onClick={() => paginate(currentPage + 1)}
								disabled={currentPage === totalPages}
								className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
							>
								Próxima
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
