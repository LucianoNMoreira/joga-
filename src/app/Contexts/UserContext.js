'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { redirect } from 'next/navigation'
import axios from 'axios'

const UserContext = createContext()
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [updatedAt, setUpdatedAt] = useState()

  const login = async (email, password) => {
    console.log('UserContext login', email, password)

    const response = await axios.post('/api/v1/auth', {
        email: email,
        password: password
    })

    const user = response.data
    Cookies.set('user', JSON.stringify(user))
    setUser(user)
    redirect('/dashboard')
  }

  const logout = () => {
    Cookies.set('user', null)
    setUser(null)
    redirect('/')
  }

  useEffect(() => {
    const userCookie = Cookies.get('user')
    if (!user && userCookie) {
      setUser(JSON.parse(userCookie))
      setUpdatedAt(new Date())
    }
  }, [user])

  useEffect(() => {
    console.debug('UserContext user', user)
    console.debug('UserContext updatedAt', updatedAt)
  }, [user, updatedAt])

  return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	)
}
