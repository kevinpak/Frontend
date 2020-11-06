import React from 'react'
import Page from './UI/page/page'
import Sidebar from './sidebar/sidebar'
import Main from './pages/main'

const App = () => {

  return (
    <>
      <Page>
        <Sidebar/>
        <Main/>
      </Page>
    </>
  )
}

export default App