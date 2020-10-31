import React from 'react'
import Header from './Header/header'

function AppLayout(props){
  return(
    <>
      <Header/>
      <main>
        {props.children}
      </main>
    </>
  )
}

export default AppLayout