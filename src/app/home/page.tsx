import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'

export default function Home() {
	return (
		<div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-black text-white">
			{/* Navigation */}
			<NavBar />

			{/* Hero Section */}
			<Hero />

			{/* Footer */}
			<Footer />
		</div>
	)
}
