'use client'

import './styles.css'
import { login } from '@/app/actions/login'
import LoginForm from './loginForm'

export default function Login() {
    return (
        <div id='login-page'>
            <h1>Login</h1>

            <LoginForm onSubmit={login} />
        </div>
    )
}
