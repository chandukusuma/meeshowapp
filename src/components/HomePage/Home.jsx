import React from 'react'
import Body from './body'
import Cards from '../Cards'
import { Header } from '../Header'
import Hovernav from './Hovernav'
import Footer from './Footer'
function Home() {
  return (
    <div>
      <Header />
      <Hovernav />
        <Body />
        <Cards />
        <Footer />
    </div>
  )
}

export default Home