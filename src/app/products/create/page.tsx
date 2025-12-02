'use client'

import Image from 'next/image'
import { useState } from 'react'
import { createProduct, uploadImageToCloudinary } from './actions'

export default function CreateClothesPage() {
	const [name, setName] = useState('')
	const [brand, setBrand] = useState('')
	const [category, setCategory] = useState('')
	const [price, setPrice] = useState('')
	const [rating, setRating] = useState('')
	const [reviews, setReviews] = useState('')
	const [colors, setColors] = useState('')
	const [sizes, setSizes] = useState('')
	const [description, setDescription] = useState('')
	const [features, setFeatures] = useState('')
	const [stock, setStock] = useState('')

	const [file, setFile] = useState<File | null>(null)
	const [preview, setPreview] = useState<string>('')
	const [loading, setLoading] = useState(false)

	function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
		const selectedFile = e.target.files?.[0]
		if (selectedFile) {
			setFile(selectedFile)
			setPreview(URL.createObjectURL(selectedFile))
		}
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		setLoading(true)

		try {
			let imageUrl = ''

			if (file) {
				const formData = new FormData()
				formData.append('file', file)

				const result = await uploadImageToCloudinary(formData)
				imageUrl = result.secure_url
			}

			const productData = {
				name,
				brand,
				category,
				price: parseFloat(price),
				image: imageUrl,
				rating: parseFloat(rating),
				reviews: parseInt(reviews),
				colors: colors
					.split(',')
					.map((s) => s.trim())
					.filter((s) => s.length > 0),
				sizes: sizes
					.split(',')
					.map((s) => s.trim())
					.filter((s) => s.length > 0),
				description,
				features: features
					.split(',')
					.map((s) => s.trim())
					.filter((s) => s.length > 0),
				stock: parseInt(stock),
			}

			const response = await createProduct(productData)

			if (response.success) {
				alert('Produto criado com sucesso!')
			} else {
				alert(response.message)
			}
		} catch (error) {
			console.error(error)
			alert('Erro ao criar o produto.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12 mt-16">
			<div className="w-full max-w-2xl bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
				<h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600 mb-8">
					Criar Roupa
				</h1>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label htmlFor="name" className="block mb-1 text-gray-300">
							Nome da peça
						</label>
						<input
							id="name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Ex: Camiseta Oversized"
							required
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
						/>
					</div>

					<div>
						<label htmlFor="brand" className="block mb-1 text-gray-300">
							Marca
						</label>
						<input
							id="brand"
							type="text"
							value={brand}
							onChange={(e) => setBrand(e.target.value)}
							placeholder="Ex: Nike, Adidas"
							required
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
						/>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div>
							<label htmlFor="category" className="block mb-1 text-gray-300">
								Categoria
							</label>
							<input
								id="category"
								type="text"
								value={category}
								onChange={(e) => setCategory(e.target.value)}
								placeholder="Ex: Camisetas"
								required
								className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
							/>
						</div>

						<div>
							<label htmlFor="price" className="block mb-1 text-gray-300">
								Preço (R$)
							</label>
							<input
								id="price"
								type="number"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
								placeholder="79.90"
								required
								className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
							/>
						</div>
					</div>

					<div className="grid grid-cols-3 gap-4">
						<div>
							<label htmlFor="rating" className="block mb-1 text-gray-300">
								Avaliação (1-5)
							</label>
							<input
								id="rating"
								type="number"
								value={rating}
								onChange={(e) => setRating(e.target.value)}
								placeholder="4.5"
								step="0.1"
								min="0"
								max="5"
								required
								className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
							/>
						</div>
						<div>
							<label htmlFor="reviews" className="block mb-1 text-gray-300">
								Número de Avaliações
							</label>
							<input
								id="reviews"
								type="number"
								value={reviews}
								onChange={(e) => setReviews(e.target.value)}
								placeholder="150"
								required
								className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
							/>
						</div>
						<div>
							<label htmlFor="stock" className="block mb-1 text-gray-300">
								Estoque
							</label>
							<input
								id="stock"
								type="number"
								value={stock}
								onChange={(e) => setStock(e.target.value)}
								placeholder="100"
								required
								className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
							/>
						</div>
					</div>

					<div>
						<label htmlFor="colors" className="block mb-1 text-gray-300">
							Cores (separadas por vírgula)
						</label>
						<input
							id="colors"
							type="text"
							value={colors}
							onChange={(e) => setColors(e.target.value)}
							placeholder="Ex: Vermelho, Azul, Branco"
							required
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
						/>
					</div>

					<div>
						<label htmlFor="sizes" className="block mb-1 text-gray-300">
							Tamanhos (separados por vírgula)
						</label>
						<input
							id="sizes"
							type="text"
							value={sizes}
							onChange={(e) => setSizes(e.target.value)}
							placeholder="Ex: P, M, G, GG"
							required
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
						/>
					</div>

					<div>
						<label htmlFor="description" className="block mb-1 text-gray-300">
							Descrição
						</label>
						<textarea
							id="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Descreva o produto aqui..."
							rows={4}
							required
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
						></textarea>
					</div>

					<div>
						<label htmlFor="features" className="block mb-1 text-gray-300">
							Características (separadas por vírgula)
						</label>
						<input
							id="features"
							type="text"
							value={features}
							onChange={(e) => setFeatures(e.target.value)}
							placeholder="Ex: Tecido respirável, Gola redonda, Estampa exclusiva"
							required
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
						/>
					</div>

					<div>
						<label htmlFor="file-upload" className="block mb-1 text-gray-300">
							Foto do Produto
						</label>

						<div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
							<input
								id="file-upload"
								type="file"
								accept="image/*"
								onChange={handleFileChange}
								className="block w-full text-sm text-gray-400
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-500/10 file:text-blue-400
                  hover:file:bg-blue-500/20
                  cursor-pointer"
							/>
						</div>

						{preview && (
							<div className="mt-4 relative group">
								<Image
									width={128}
									height={128}
									src={preview}
									alt="Preview"
									className="w-32 h-32 object-cover rounded-lg border border-white/20"
								/>
							</div>
						)}
					</div>

					<button
						type="submit"
						disabled={loading}
						className="w-full py-3 rounded-lg font-medium bg-linear-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
					>
						{loading ? (
							<span className="flex items-center gap-2">
								<svg
									className="animate-spin h-5 w-5 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<title>Loading...</title>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Enviando...
							</span>
						) : (
							'Criar Roupa'
						)}
					</button>
				</form>
			</div>
		</div>
	)
}
