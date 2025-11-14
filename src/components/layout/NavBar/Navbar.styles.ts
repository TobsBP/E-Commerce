export const NavbarStyles = {
	nav: 'relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl',

	navTopGlow:
		'absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50',

	navBottomGlow:
		'absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30',

	navContainer: 'px-6 py-4',

	navContent: 'flex items-center justify-between',

	logo: 'flex items-center gap-2',

	logoIcon:
		'h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50',

	logoText: 'text-white font-bold text-xl hidden sm:block',

	desktopMenu: 'hidden md:flex items-center gap-2',

	mobileButton:
		'md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors',

	mobileMenu:
		'md:hidden mt-4 pt-4 border-t border-white/10 space-y-1 animate-in fade-in slide-in-from-top-2 duration-300',
}
