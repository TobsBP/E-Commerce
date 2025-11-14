'use client'

import { useState } from 'react'

export default function CreateClothesPage() {
	const [name, setName] = useState('')
	const [category, setCategory] = useState('')
	const [price, setPrice] = useState('')
	const [image, setImage] = useState('')

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()

		console.log({
			name,
			category,
			price,
			image,
		})

		alert('Roupa criada com sucesso!')
	}

	return (
		<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
			<div className="w-full max-w-2xl bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
				<h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600 mb-8">
					Criar Roupa
				</h1>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label className="block mb-1 text-gray-300">Nome da peça</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Ex: Camiseta Oversized"
							required
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
						/>
					</div>

					<div>
						<label className="block mb-1 text-gray-300">Categoria</label>
						<input
							type="text"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							placeholder="Ex: Camisetas, Calças, Acessórios"
							required
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
						/>
					</div>

					<div>
						<label className="block mb-1 text-gray-300">Preço (R$)</label>
						<input
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							placeholder="Ex: 79.90"
							required
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
						/>
					</div>

					<div>
						<label className="block mb-1 text-gray-300">URL da Imagem</label>
						<input
							type="text"
							value={image}
							onChange={(e) => setImage(e.target.value)}
							placeholder="https://exemplo.com/imagem.jpg"
							required
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
						/>
					</div>

					<button
						type="submit"
						className="w-full py-3 rounded-lg font-medium bg-linear-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/40 transition-all"
					>
						Criar Roupa
					</button>
				</form>
			</div>
		</div>
	)
}
