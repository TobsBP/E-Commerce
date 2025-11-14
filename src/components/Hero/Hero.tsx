import Link from 'next/link'

export default function Hero() {
	return (
		<section className="pt-32 pb-20 px-6">
			<div className="container mx-auto">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="max-w-2xl">
						<div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
							<span className="text-blue-400 text-sm font-semibold">✨ Nova Coleção 2025</span>
						</div>
						<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
							Encontre Sua
							<br />
							<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
								Próxima Roupa
							</span>
						</h1>
						<p className="text-xl text-gray-300 mb-8 leading-relaxed">
							Transformamos suas ideias em looks incríveis com IA e design moderno. Descubra
							milhares de combinações personalizadas para seu estilo.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link
								href="/roupas"
								className="px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all"
							>
								Explorar Roupas
							</Link>
							<Link
								href="/criar"
								className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all"
							>
								Criar Seu Look
							</Link>
						</div>
						<div className="flex items-center gap-8 mt-12">
							<div>
								<div className="text-3xl font-bold text-blue-400">10K+</div>
								<div className="text-sm text-gray-400">Looks Criados</div>
							</div>
							<div>
								<div className="text-3xl font-bold text-purple-400">5K+</div>
								<div className="text-sm text-gray-400">Clientes Felizes</div>
							</div>
							<div>
								<div className="text-3xl font-bold text-pink-400">4.9★</div>
								<div className="text-sm text-gray-400">Avaliação</div>
							</div>
						</div>
					</div>

					<div className="relative hidden lg:block">
						<div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
							<div className="absolute inset-0 bg-linear-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-3xl" />
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center">
									<div className="w-64 h-64 mx-auto mb-6 rounded-full bg-linear-to-br from-blue-500 via-blue-600 to-blue-950 animate-pulse" />
									<p className="text-2xl font-semibold">Seu estilo, sua identidade</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
