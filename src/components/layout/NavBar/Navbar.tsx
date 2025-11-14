'use client'

import MenuLink from '../MenuLink/MenuLink'
import { Home, Box, Info, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavbarStyles } from './Navbar.styles'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className={NavbarStyles.nav}>
			{/* Brilho superior */}
			<div className={NavbarStyles.navTopGlow} />

			<div className={NavbarStyles.navContainer}>
				<div className={NavbarStyles.navContent}>
					{/* Logo/Brand */}
					<div className={NavbarStyles.logo}>
						<div className={NavbarStyles.logoIcon}>
							<span className="text-white font-bold text-sm">M</span>
						</div>
						<span className={NavbarStyles.logoText}>MyApp</span>
					</div>

					{/* Desktop Menu */}
					<div className={NavbarStyles.desktopMenu}>
						<MenuLink href="/" label="Home" icon={<Home size={18} />} />
						<MenuLink
							href="/products"
							label="Products"
							icon={<Box size={18} />}
						/>
						<MenuLink href="/about" label="About" icon={<Info size={18} />} />
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className={NavbarStyles.mobileButton}
						aria-label="Toggle menu"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className={NavbarStyles.mobileMenu}>
						<MenuLink href="/" label="Home" icon={<Home size={18} />} />
						<MenuLink
							href="/products"
							label="Products"
							icon={<Box size={18} />}
						/>
						<MenuLink href="/about" label="About" icon={<Info size={18} />} />
					</div>
				)}
			</div>

			{/* Brilho inferior */}
			<div className={NavbarStyles.navBottomGlow} />
		</nav>
	)
}
