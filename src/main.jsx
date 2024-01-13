import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FlowProvider } from './context/FlowContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FlowProvider>
      <App />
    </FlowProvider>
  </React.StrictMode>,
)
