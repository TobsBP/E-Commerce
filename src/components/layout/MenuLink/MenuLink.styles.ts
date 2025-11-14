export const MenuLinkStyles = {
	link: 'group relative flex flex-row items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105',

	linkGlow:
		'absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500',

	linkLabel:
		'relative z-10 font-medium group-hover:translate-x-0.5 transition-transform duration-300',

	linkIcon:
		'relative z-10 text-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300',

	linkIndicator:
		'absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300 group-hover:w-3/4 group-hover:-translate-x-1/2',
}
