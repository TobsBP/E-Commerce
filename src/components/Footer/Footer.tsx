import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="border-t border-white/10 py-12 px-6 bg-gray-900/50">
			<div className="container mx-auto">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					<div>
						<div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
							FASHIONAI
						</div>
						<p className="text-gray-400 text-sm">
							Transformando a moda com inteligência artificial
						</p>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Produto</h4>
						<ul className="space-y-2 text-gray-400 text-sm">
							<li>
								<Link href="/roupas" className="hover:text-white transition-colors">
									Roupas
								</Link>
							</li>
							<li>
								<Link href="/criar" className="hover:text-white transition-colors">
									Criar Looks
								</Link>
							</li>
							<li>
								<Link href="/tendencias" className="hover:text-white transition-colors">
									Tendências
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Empresa</h4>
						<ul className="space-y-2 text-gray-400 text-sm">
							<li>
								<Link href="/sobre" className="hover:text-white transition-colors">
									Sobre
								</Link>
							</li>
							<li>
								<Link href="/blog" className="hover:text-white transition-colors">
									Blog
								</Link>
							</li>
							<li>
								<Link href="/carreiras" className="hover:text-white transition-colors">
									Carreiras
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Redes Sociais</h4>
						<div className="flex gap-4">
							<a
								href="#"
								className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
							>
								<span className="sr-only">Twitter</span>𝕏
							</a>
							<a
								href="#"
								className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
							>
								<span className="sr-only">Instagram</span>📷
							</a>
							<a
								href="#"
								className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
							>
								<span className="sr-only">LinkedIn</span>in
							</a>
						</div>
					</div>
				</div>
				<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
					<div>© 2024 FASHIONAI. Todos os direitos reservados.</div>
					<div className="flex gap-6">
						<Link href="/privacidade" className="hover:text-white transition-colors">
							Privacidade
						</Link>
						<Link href="/termos" className="hover:text-white transition-colors">
							Termos
						</Link>
						<Link href="/cookies" className="hover:text-white transition-colors">
							Cookies
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
