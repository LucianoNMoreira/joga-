'use client'

import Link from 'next/link'
import './styles.css'
import { redirect } from "next/navigation"
import Cookies from 'js-cookie'

export default function Sidebar() {
    const handleLogout = () => {
        Cookies.set('user', null)
        window.location.href = '/'
    }

    return(
        <div id='sidebar-component'>
            <h3>Sidebar</h3>
            <ul>
                <li>
                    <Link href='/'>Início</Link>
                </li>
                <li>
                    <a href='/login'>Login</a>
                </li>
                <li>
                    <button onClick={ handleLogout }>Sair</button>
                </li>
            </ul>
        </div>
    )
}
