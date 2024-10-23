'use client'

import Form from 'next/form'
import { useState } from 'react'
import './styles.css'
import {login} from '@/app/actions/login'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div id='login-page'>
            <h1>Login</h1>

            <Form action={login}>
                <div className='input-group'>
                    <label>E-mail</label>
                    <input type='email' name='email' />
                </div>

                <div className='input-group'>
                    <label>Senha</label>
                    <input type='password' name='password' />
                </div>

                <button>Entrar</button>
            </Form>
        </div>
    )
}
