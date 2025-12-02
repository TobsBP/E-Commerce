'use client'

import { ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import CartDrawer from '@/components/CartDrawer'

export default function CartButton() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				type="button"
				className="text-gray-300 hover:text-white transition-colors relative"
			>
				<ShoppingBag size={24} />
				{/* Optional badge could be added here */}
			</button>

			<CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</>
	)
}
