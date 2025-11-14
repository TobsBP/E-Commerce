export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
			<div className="w-full max-w-3xl bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
				<h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600 mb-4">
					Sobre Nós
				</h1>

				<p className="text-gray-400 leading-relaxed mb-6">
					Nosso projeto foi criado com o objetivo de oferecer uma plataforma moderna, intuitiva e
					eficiente. Buscamos entregar a melhor experiência possível, unindo design elegante,
					tecnologia atual e foco total no usuário.
				</p>

				<h2 className="text-xl font-semibold text-white mb-2">Nossa Missão</h2>
				<p className="text-gray-400 leading-relaxed mb-6">
					Entregar produtos de qualidade, com transparência, velocidade e um padrão de excelência
					que realmente faça diferença para quem usa.
				</p>

				<h2 className="text-xl font-semibold text-white mb-2">Valores</h2>
				<ul className="list-disc list-inside text-gray-400 space-y-2">
					<li>Qualidade em tudo o que fazemos</li>
					<li>Compromisso com o usuário</li>
					<li>Inovação constante</li>
					<li>Transparência e responsabilidade</li>
				</ul>
			</div>
		</div>
	)
}
