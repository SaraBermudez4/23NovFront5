import React from 'react'

const Home = () => {

    if (JSON.parse(localStorage.getItem('logueado'))) {
        return (
            <h1>Hola sara</h1>
        )
    } else {
        return (
            <h1>Usted no está logueado</h1>
        )
    }
}

export default Home
