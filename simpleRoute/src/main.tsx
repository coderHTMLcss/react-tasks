import React from 'react'
import ReactDOM from 'react-dom/client'
import MyAppRouter from './routes'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyAppRouter />
  </React.StrictMode>,
)
