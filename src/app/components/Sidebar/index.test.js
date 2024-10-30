import '@testing-library/jest-dom'

import { render, screen } from "@testing-library/react"
import Sidebar, { createMenuItems } from "."
import { UserProvider } from "@/app/Contexts/UserContext"
import Cookies from 'js-cookie'

describe('Testes da função Sidebar.createMenuItems', () => {

  test('Para usuários não logados deve retornar 3 itens', () => {
    const items = createMenuItems(null)

    expect(items.length).toBe(3)

    expect(items.map((i) => i.href)).toContain('/')
    expect(items.map((i) => i.href)).toContain('/esportes')
    expect(items.map((i) => i.href)).toContain('/login')

    expect(items.map((i) => i.href)).not.toContain('/logout')
  })

})

describe('Testes de renderização do Sidebar', () => {

  test('Para usuários não logados não deve exibir o link #logout', () => {
    render(
      <UserProvider>
        <Sidebar />
      </UserProvider>
    )

    expect(screen.queryByTestId('logout-button')).not.toBeInTheDocument()
  })

  test('Para usuários logados deve exibir o link #logout', () => {
    const user = {
      id: 1,
      name: 'Luciano',
      email: 'luciano@email.com'
    }
    Cookies.set('user', JSON.stringify(user))

    render(
      <UserProvider>
        <Sidebar />
      </UserProvider>
    )

    expect(screen.queryByTestId('logout-button')).toBeInTheDocument()
  })

})
