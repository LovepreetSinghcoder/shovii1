import React from 'react'
import Bottambar from '../Bottambar/Bottambar'
import Content from '../Content/Content'
import HomeHeader from '../HomeHeader/HomeHeader'
import Testcard from '../HomeHeader/Testcard'

const Home = () => {
  return (
    <>
    {/* <Testcard/> */}
    <HomeHeader/>
    <Content/>
    <Bottambar/>
    </>
  )
}

export default Home