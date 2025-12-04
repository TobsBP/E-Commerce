import { LogOut, Mail, Shield, User } from 'lucide-react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getUser } from '@/lib/api/user'
import { parseJwt } from '@/lib/auth/jwt'
import { logoutAction } from '@/lib/auth/login'

export default async function ProfilePage() {
	const cookieStore = await cookies()
	const token = cookieStore.get('token')?.value

	if (!token) {
		redirect('/login')
	}

	const tokenData = parseJwt(token)
	let userData = null

	if (tokenData?.userId) {
		userData = await getUser(tokenData.userId)
	}

	// Merge token data (fallback) with fetched user data
	const user = { ...tokenData, ...userData }

	return (
		<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
			<div className="w-full max-w-md bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
				<div className="flex flex-col items-center mb-8">
					<div className="w-24 h-24 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
						<User size={48} className="text-white" />
					</div>
					<h1 className="text-2xl font-bold text-white">Ola! {user?.name}</h1>
					<p className="text-gray-400 text-sm">Gerencie sua conta</p>
				</div>

				<div className="space-y-6">
					<div className="p-4 bg-gray-900/50 rounded-xl border border-white/5 space-y-4">
						<div className="flex items-center gap-4">
							<div className="p-2 bg-blue-500/10 rounded-lg">
								<Mail size={20} className="text-blue-400" />
							</div>
							<div>
								<p className="text-xs text-gray-400">Email</p>
								<p className="font-medium">{user?.email || 'Email não encontrado'}</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="p-2 bg-purple-500/10 rounded-lg">
								<Shield size={20} className="text-purple-400" />
							</div>
							<div>
								<p className="text-xs text-gray-400">Função</p>
								<p className="font-medium capitalize">{user?.role || 'Usuário'}</p>
							</div>
						</div>
					</div>

					<form action={logoutAction}>
						<button
							type="submit"
							className="w-full py-3 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group"
						>
							<LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
							Sair da Conta
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
