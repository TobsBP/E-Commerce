export async function loginRequest(email: string, password: string) {
	const res = await fetch(`${process.env.API_URL}/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
		cache: 'no-store',
	})

	if (!res.ok) throw new Error('Credenciais inválidas')

	return res.json()
}
