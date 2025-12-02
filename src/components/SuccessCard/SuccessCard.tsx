import { CheckCircle, X } from 'lucide-react'

interface SuccessCardProps {
	productType: string
	onClose: () => void
	onContinue?: () => void
}

export default function SuccessCard({ productType, onClose, onContinue }: SuccessCardProps) {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
			<div className="bg-gray-800 border border-green-500/50 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-green-500/20 relative animate-in fade-in zoom-in duration-300">
				<button
					type="button"
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
				>
					<X size={24} />
				</button>

				<div className="flex flex-col items-center text-center space-y-4">
					<div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
						<CheckCircle className="text-green-500 w-8 h-8" />
					</div>

					<h2 className="text-2xl font-bold text-white">Sucesso!</h2>

					<p className="text-gray-300">
						O produto <span className="font-semibold text-green-400">{productType}</span> foi criado
						e salvo no sistema corretamente.
					</p>

					<button
						type="button"
						onClick={onContinue || onClose}
						className="mt-6 w-full py-3 from-blue-500 to-purple-600 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-green-500/25"
					>
						Continuar
					</button>
				</div>
			</div>
		</div>
	)
}
