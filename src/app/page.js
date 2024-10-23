'use client'

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'

export default function Home() {
  const [user, setUser] = useState()

  useEffect(() => {
    const userCookie = Cookies.get('user')
    if (userCookie) {
      setUser(JSON.parse(userCookie))
    }
  }, [])

  return (
    <>
      <h1>Home</h1>

      {user && 
        <>
          <h2>Olá, { user.name }!</h2>
        </>
      }
    </>
  );
}
