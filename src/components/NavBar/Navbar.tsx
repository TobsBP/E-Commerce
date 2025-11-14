import Link from 'next/link'

export default function NavBar() {
	return (
		<nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
			<div className="container mx-auto px-6 py-4 flex items-center justify-between">
				<Link
					href="/"
					className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
				>
					FASHIONAI
				</Link>
				<div className="hidden md:flex items-center gap-8">
					<Link href="/products" className="hover:text-blue-400 transition-colors">
						Products
					</Link>
					<Link href="/products/create" className="hover:text-blue-400 transition-colors">
						Criar Looks
					</Link>
					<Link href="/about" className="hover:text-blue-400 transition-colors">
						Sobre
					</Link>
					<Link
						href="/contato"
						className="px-6 py-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
					>
						Contato
					</Link>
				</div>
				<button className="md:hidden">
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</nav>
	)
}
