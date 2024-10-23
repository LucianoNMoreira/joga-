'use client'

import Link from 'next/link'
import './styles.css'
import { useUser } from '@/app/Contexts/UserContext'
import { useEffect } from 'react'

export default function Sidebar() {
    const { user, logout } = useUser()

    useEffect(() => {
        console.debug('Sidebar user', user)
    }, [user])

    return (
        <>
            <div id='sidebar-component'>
                <h3>Sidebar</h3>
                <p>{user && user.name}</p>

                <ul>
                    <li>
                        <Link href={user ? '/dashboard' : '/'}>Início</Link>
                    </li>

                    {!user &&
                        <>
                            <li>
                                <Link href='/login'>Login</Link>
                            </li>
                        </>
                    }

                    {user && 
                        <>
                            <li>
                                <button onClick={ logout }>Sair</button>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </>
    )

}
