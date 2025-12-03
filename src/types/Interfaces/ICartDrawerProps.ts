import type { IProduct } from '@/types/Interfaces/IProduct'

export interface CartDrawerProps {
	isOpen: boolean
	onClose: () => void
}

export interface CartItem extends Partial<IProduct> {
	shirtId: string
	quantity: number
	price: number
}
