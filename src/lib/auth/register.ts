export async function registerRequest(email: string, password: string, role: string) {
	const res = await fetch(`${process.env.API_URL}/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password, role }),
		cache: 'no-store',
	})

	if (!res) throw new Error('Faeld to find server')

	return res.json()
}
