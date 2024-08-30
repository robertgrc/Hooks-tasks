import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// import { HooksApp } from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp'
import './index.css'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    <CounterWithCustomHook />
  </StrictMode>,
)
