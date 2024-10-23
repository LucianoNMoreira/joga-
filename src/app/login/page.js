'use client'

import './styles.css'
import LoginForm from './loginForm'
import { useUser } from '../Contexts/UserContext'
import { login as actionLogin } from '@/app/actions/login'

export default function Login() {

    const { login } = useUser() 

    return (
        <div id='login-page'>
            <h1>Login</h1>

            <LoginForm onSubmit={login} />
        </div>
    )
}
