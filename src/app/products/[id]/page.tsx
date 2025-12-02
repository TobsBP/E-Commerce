import { ArrowLeft, Heart, ShieldCheck, ShoppingCart, Star, Truck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getShirts } from '@/lib/api/shirt'

export const revalidate = 0

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
	const resolvedParams = await params
	const id = resolvedParams.id
	const allProducts = await getShirts()
	const product = allProducts[parseInt(id, 10)]

	if (!product) {
		notFound()
	}
	return (
		<div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
			{/* Header */}
			<div className="container mx-auto px-6 pt-24">
				<Link
					href="/products"
					className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors w-fit"
				>
					<ArrowLeft size={20} />
					<span>Voltar</span>
				</Link>
			</div>

			{/* Conteúdo Principal */}
			<div className="container mx-auto px-6 py-12">
				<div className="grid lg:grid-cols-2 gap-12 items-start">
					{/* Imagem do Produto */}
					<div className="relative">
						<div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10">
							<Image
								src={product.image}
								alt={product.name}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
							<button
								type="submit"
								className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all"
							>
								<Heart size={24} />
							</button>
						</div>

						{/* Miniaturas */}
						<div className="flex gap-4 mt-6">
							{[1, 2, 3, 4].map((i) => (
								<div
									key={i}
									className="w-20 h-20 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:border-blue-400 transition-all"
								/>
							))}
						</div>
					</div>

					{/* Informações do Produto */}
					<div className="space-y-6">
						{/* Badge e Marca */}
						<div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
							<span className="text-blue-400 text-sm font-semibold">✨ Nova Coleção</span>
						</div>

						<div>
							<p className="text-gray-400 text-sm mb-2">{product.brand}</p>
							<h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>

							{/* Rating */}
							<div className="flex items-center gap-3 mb-6">
								<div className="flex items-center gap-1">
									{[0, 1, 2, 3, 4].map((ratingValue) => (
										<Star
											key={ratingValue}
											size={20}
											className={
												ratingValue < Math.floor(product.rating)
													? 'fill-yellow-400 text-yellow-400'
													: 'text-gray-600'
											}
										/>
									))}
								</div>
								<span className="text-lg font-semibold">{product.rating}</span>
								<span className="text-gray-400">({product.reviews} avaliações)</span>
							</div>
						</div>

						{/* Preço */}
						<div className="space-y-2">
							<div className="flex items-baseline gap-4">
								<span className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
									R$ {product.price.toFixed(2)}
								</span>
							</div>
							<p className="text-green-400 font-semibold">33% de desconto</p>
						</div>

						{/* Cores */}
						<div>
							<h3 className="text-lg font-semibold mb-3">Cores Disponíveis</h3>
							<div className="flex gap-3">
								{product.colors.map((color) => (
									<button
										type="button"
										key={color}
										className="w-12 h-12 rounded-full border-2 border-white/20 hover:border-blue-400 transition-all hover:scale-110"
										style={{ backgroundColor: color }}
									/>
								))}
							</div>
						</div>

						{/* Tamanhos */}
						<div>
							<h3 className="text-lg font-semibold mb-3">Tamanho</h3>
							<div className="flex gap-3">
								{product.sizes.map((size) => (
									<button
										type="button"
										key={size}
										className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold hover:bg-white/20 hover:border-blue-400 transition-all"
									>
										{size}
									</button>
								))}
							</div>
						</div>

						{/* Botões de Ação */}
						<div className="flex gap-4 pt-4">
							<button
								type="button"
								className="flex-1 px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2"
							>
								<ShoppingCart size={20} />
								Adicionar ao Carrinho
							</button>
							<button
								type="button"
								className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all"
							>
								Comprar Agora
							</button>
						</div>

						{/* Benefícios */}
						<div className="grid grid-cols-2 gap-4 pt-6">
							<div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
								<Truck className="text-blue-400" size={24} />
								<div>
									<p className="font-semibold text-sm">Frete Grátis</p>
									<p className="text-xs text-gray-400">Acima de R$ 200</p>
								</div>
							</div>
							<div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
								<ShieldCheck className="text-green-400" size={24} />
								<div>
									<p className="font-semibold text-sm">Garantia</p>
									<p className="text-xs text-gray-400">90 dias</p>
								</div>
							</div>
						</div>

						{/* Descrição */}
						<div className="pt-6 space-y-4">
							<h3 className="text-2xl font-semibold">Sobre o Produto</h3>
							<p className="text-gray-300 leading-relaxed">{product.description}</p>

							<div className="space-y-2">
								<h4 className="font-semibold text-lg">Características:</h4>
								<ul className="space-y-2">
									{product.features.map((feature) => (
										<li key={feature} className="flex items-start gap-2 text-gray-300">
											<span className="text-blue-400 mt-1">•</span>
											{feature}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
