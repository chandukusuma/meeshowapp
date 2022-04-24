import React from 'react'
import Body from './body'
import Cards from '../Cards'
import { Header } from '../Header'
import Hovernav from './Hovernav'
function Home() {
  return (
    <div>
      <Header />
      <Hovernav />
        <Body />
        <Cards />
    </div>
  )
}

export default Home