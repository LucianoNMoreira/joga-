'use client'

import Link from 'next/link'
import './styles.css'
import { useUser } from '@/app/Contexts/UserContext'
import { useEffect } from 'react'

export function createMenuItems(user) {
    const items = [
        { href: '/', name: 'Início' },
        { href: '/esportes', name: 'Esportes' },
    ]
    if (!user) {
        items.push({ href: '/login', name: 'Login' })
    }
    return items
}

export default function Sidebar() {
    const { user, logout } = useUser()

    useEffect(() => {
        console.debug('Sidebar user', user)
    }, [user])

    return (
        <>
            <div id='sidebar-component'>
                <p>{user && `Olá, ${user.name}`}</p>

                <h3>Sidebar</h3>

                <ul>
                    {createMenuItems(user).map((item) => {
                        return (
                            <li key={item.href}><Link href={item.href}>{item.name}</Link></li>
                        )
                    })}

                    {user && 
                        <>
                            <li>
                                <button data-testid='logout-button' onClick={ logout }>Sair</button>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </>
    )

}
