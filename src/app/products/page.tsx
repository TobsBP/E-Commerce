'use client'

import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import ProductCard from '@/components/ProductCard'
import { useProducts } from '@/hooks/useProducts'
import { formatCategoryName } from '@/utils/categorys.utils'
import { usePagination } from '@/utils/pagination.utils'

export default function ProductsPage() {
	const [query, setQuery] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('Todas')
	const notify = () => toast('Wow so easy!')

	const { data: products = [], isLoading: loading, error } = useProducts()

	const categories = ['Todas', ...Array.from(new Set(products.map((p) => p.category)))]

	const filtered = products.filter((p) => {
		const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase())
		const matchesCategory = selectedCategory === 'Todas' || p.category === selectedCategory
		return matchesQuery && matchesCategory
	})

	const {
		currentPage,
		currentItems: currentProducts,
		totalPages,
		paginate,
	} = usePagination(filtered, 15)

	if (loading) {
		return (
			<div className="min-h-screen bg-gray-900 flex items-center justify-center">
				<ToastContainer />
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
		<div className="min-h-screen bg-gray-900 pb-12">
			<div className="pt-24 min-h bg-gray-900 text-white flex justify-center px-6">
				<div className="w-full max-w-7xl bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
					<h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600 mb-6">
						Produtos
					</h1>

					{/* Filters */}
					<div className="flex flex-col md:flex-row gap-4 mb-6">
						<input
							value={query}
							onChange={(e) => {
								setQuery(e.target.value)
								paginate(1) // reseta paginação
							}}
							placeholder="Pesquisar produtos..."
							className="flex-1 bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 transition"
						/>
						<div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
							{categories.map((cat) => (
								<button
									type="submit"
									key={cat}
									onClick={() => {
										setSelectedCategory(cat)
										paginate(1) // reseta paginação
									}}
									className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
										selectedCategory === cat
											? 'bg-blue-600 text-white'
											: 'bg-gray-700 hover:bg-gray-600 text-gray-300'
									}`}
								>
									{formatCategoryName(cat)}
								</button>
							))}
						</div>
					</div>

					{/* Products */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
						{currentProducts.map((p) => (
							<ProductCard key={p.id} {...p} />
						))}
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
