
import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { UserContext } from './UserContext'

const Login = () => {

    const [form, setForm] = useState({
        nombre: "Susana",
        apellido: "Torres"
    })

    const { user, setUser } = useContext(UserContext)

    const logueo = () => {
        setUser(form)
        localStorage.setItem('logueado', true)
    }

    const logout = () => {
        setUser({
            nombre: '',
            apellido: ''
        })
        localStorage.setItem('logueado', false)
    }

    return (
        <div>
            <h1>Login</h1>
            <Button onClick={logueo}>
                Login
            </Button>
            <Button onClick={logout}>
                Logout
            </Button>
        </div>
    )
}

export default Login
