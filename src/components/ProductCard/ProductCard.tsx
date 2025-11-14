import { Product } from '@/types/Schemas/productSchema'
import Link from 'next/link'

export default function ProductCard({
	id,
	name,
	price,
	brand,
	size,
	stock,
	color,
	category,
	material,
	gender,
}: Product) {
	const cardContent = (
		<div className="block bg-gray-900/40 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500 transition">
			<img src={'/images/Book.png'} alt={name} className="w-full h-40 object-cover" />
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
