// import { useState } from 'react'
import './App.css'
import Routing from './components/Routing/Routing'
import { CurrencyContext } from './context/CurrencyContext'
// import Banner from './components/Banner/Banner'
// import CoinTable from './components/CoinTable/CoinTable'
// import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'

function App() {
  // const [currency, setCurrency] = useState('usd')
  return (
    <>
    {/* {currency}
    <Navbar setCurrency={setCurrency}/>
    <Banner/>
    <CoinTable currency={currency}/> */}
    {/* <CurrencyContext.Provider value={{currency,setCurrency}}> */}
     {/* <Home/> */}
    {/* </CurrencyContext.Provider> */}
    <Routing />
    </>
  )
}

export default App
