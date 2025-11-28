import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/types/Schemas/productSchema'

export default function ProductCard({ id, name, price }: Product) {
	const cardContent = (
		<div className="block bg-gray-900/40 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500 transition">
			<Image
				src={'/images/Book.png'}
				alt={name}
				width={400}
				height={160}
				className="w-full h-40 object-cover"
			/>
			<div className="p-4">
				<h2 className="text-lg font-semibold text-white">{name}</h2>
				<p className="text-blue-400 text-lg font-bold mt-1">R$ {price.toFixed(2)}</p>
				<p className="text-gray-400 text-sm mt-1">Ver detalhes</p>
			</div>
		</div>
	)

	if (id) {
		return (
			<Link href={`/products/${id}`} className="contents">
				{cardContent}
			</Link>
		)
	}

	return cardContent
}
