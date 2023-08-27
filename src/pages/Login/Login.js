import React from 'react'
import styles from './Login.module.css'
import { useAuthentication } from '../../hooks/useAuthentication';
import { useState, useEffect } from 'react'


const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    const {login, error: authError, loading} = useAuthentication();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError("")
        const user = {
            email,
            password
        }
        const res = await login(user)
        console.log(res)
    }

    useEffect(()=> {
        if(authError){
            setError(authError)
        }
    },[authError])
  return (
    <div className={styles.login}>
      <h2>Entrar</h2>
      <p>Faça o login para utilizar o sistema</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Email:</span>
                <input type="email" name='email' placeholder='Email do usuario' required
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name='password' placeholder='Insira sua senha' required
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            {!loading && <button className='btn'>Cadastrar</button>}
            {loading && <button className='btn' disabled>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Login