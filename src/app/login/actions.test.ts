import { loginAction } from './actions'
import { cookies } from 'next/headers'
import { loginRequest } from '@/lib/auth/login'
import { redirect } from 'next/navigation'

jest.mock('next/headers', () => ({
	cookies: jest.fn(),
}))

jest.mock('@/lib/auth/login', () => ({
	loginRequest: jest.fn(),
}))

jest.mock('next/navigation', () => ({
	redirect: jest.fn(),
}))

describe('loginAction', () => {
	it('should set the token cookie and redirect to /products on successful login', async () => {
		const formData = new FormData()
		formData.append('email', 'test@example.com')
		formData.append('password', 'password123')

		const mockLoginData = {
			token: {
				accessToken: 'mock-access-token',
			},
		}

		;(loginRequest as jest.Mock).mockResolvedValue(mockLoginData)

		const mockSet = jest.fn()
		;(cookies as jest.Mock).mockReturnValue({
			set: mockSet,
		})

		await loginAction(formData)

		expect(loginRequest).toHaveBeenCalledWith('test@example.com', 'password123')
		expect(mockSet).toHaveBeenCalledWith('token', 'mock-access-token', {
			httpOnly: true,
			secure: true,
			path: '/',
		})
		expect(redirect).toHaveBeenCalledWith('/products')
	})
})
