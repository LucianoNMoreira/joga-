'use client';

import Form from 'next/form'
import { useState } from 'react'

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('lucianonobremoreira@gmail.com')
  const [password, setPassword] = useState('123123')

  const handleSubmit = (ev) => {
    // Não deixa o form submeter a página, pois iremos chamar uma API
    // ev.preventDefault()

    onSubmit && onSubmit({
      email: email,
      password: password
    })
  }

  return (
    <Form action={handleSubmit}>
      <div className='input-group'>
        <label>E-mail</label>
        <input type='email' name='email' value={email} onChange={(ev) => setEmail(ev.target.value)}/>
      </div>

      <div className='input-group'>
        <label>Senha</label>
        <input type='password' name='password' value={password} onChange={(ev) => setPassword(ev.target.value)}/>
      </div>

      <button>Entrar</button>
    </Form>
  );
}
