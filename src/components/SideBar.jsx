import React from 'react'

import useTweets from '../Hooks/useTweets'

export const SideBar = () => {

    const { handleBusqueda,user }= useTweets()

  return (
    <aside>
        <form>
            <label className='buscador_titulo '>Buscador </label>
            <input className='barra_busqueda' type={"text"} placeholder={"Buscar Usuarios"} value={user} onChange={handleBusqueda}/>
            

        </form>
    </aside>
    
  )
}
