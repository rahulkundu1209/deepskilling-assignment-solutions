import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import CurrencyConverter from './components/CurrencyConverter'

function App() {

  return (
    <>
      <div>
        <Counter/>
        <CurrencyConverter/>
      </div>
    </>
  )
}

export default App
