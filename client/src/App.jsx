import Navigation from './components/Navigation'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import './App.css'
import { Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <div className='px-4 sm:px-10 md:px-20 lg:px-40 min-h-screen bg-gradient-to-b from-teal-50 to-pink-50'> 
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/buycredit" element={<BuyCredit/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
