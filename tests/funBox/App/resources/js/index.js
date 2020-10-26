import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

import * as $ from 'jquery'
import './../sass/app.scss'



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)
