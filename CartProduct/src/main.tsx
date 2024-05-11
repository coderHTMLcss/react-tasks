import React from 'react'
import ReactDOM from 'react-dom/client'

import MyAppRouter from './routes/index.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyAppRouter />
  </React.StrictMode>,
)
