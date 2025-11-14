import { registerAction } from './actions'
import Link from 'next/link'

export default function Register() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
			<div className="w-full max-w-md bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600">
						Registrar-se
					</h1>
					<p className="text-gray-400 mt-1">Entre com suas credenciais</p>
				</div>

				<form action={registerAction} className="space-y-6">
					<div>
						<label className="block mb-1 text-gray-300" htmlFor="email">
							Email
						</label>
						<input
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
							type="email"
							id="email"
							name="email"
							required
							placeholder="seu@email.com"
						/>
					</div>

					<div>
						<label className="block mb-1 text-gray-300" htmlFor="role">
							Role
						</label>
						<input
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
							type="text"
							id="role"
							name="role"
							required
							placeholder="Admin"
						/>
					</div>

					<div>
						<label className="block mb-1 text-gray-300" htmlFor="password">
							Senha
						</label>
						<input
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
							type="password"
							id="password"
							name="password"
							required
							placeholder="••••••••"
						/>
					</div>

					<div>
						<label className="block mb-1 text-gray-300" htmlFor="confirmPassword">
							Confirmar Senha
						</label>
						<input
							className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:outline-none transition"
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							required
							placeholder="••••••••"
						/>
					</div>

					<button
						type="submit"
						className="w-full py-3 rounded-lg font-medium bg-linear-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/40 transition-all"
					>
						Registrar
					</button>

					<div className="text-center text-gray-400 mt-4">
						Já tem uma conta?{' '}
						<Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors">
							Entrar
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}
