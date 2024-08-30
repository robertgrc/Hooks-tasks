import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// import { HooksApp } from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import './index.css'
import { SimpleForm } from './02-useEffect/SimpleForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    <SimpleForm />
  </StrictMode>,
)
