import React, { useState } from 'react'
//import Spinner from './components/Spinner'
//import Index from './index.ht
import Header from './components/Header'
import Footer from './components/Footer'
import CategorySection from './components/CategorySection'
const App = () => {
  const [name, setName] = useState("thet ")
  return (
    <> 
    <Header />
    <CategorySection/>
    <Footer/>
    </>
  )
}

export default App