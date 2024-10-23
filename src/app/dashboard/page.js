'use client'

import { useUser } from '../Contexts/UserContext';
import { UserProvider } from '../Contexts/UserContext';

export default function Dashboard() {
  return (
    <>
      <UserProvider>
        <ContextedDashboard />
      </UserProvider>
    </>
  )
}

const ContextedDashboard = () => {
  const { user } = useUser()

  return (
    <>
      <UserProvider>
        <h1>Dashboard do usuário <strong>{ user && user.name }</strong></h1>
      </UserProvider>
    </>
  )
}
