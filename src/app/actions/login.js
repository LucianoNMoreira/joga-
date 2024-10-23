'user server'

import axios from "axios"
import { redirect } from "next/navigation"

import Cookies from 'js-cookie'

export async function login(loginData) {
	console.log('loginData', loginData)

	const response = await axios.post('/api/v1/auth', {
		email: loginData.email,
		password: loginData.password
	})

	const user = response.data
	console.log('user', user)

	Cookies.set('user', JSON.stringify(user))

	redirect('/')
}
