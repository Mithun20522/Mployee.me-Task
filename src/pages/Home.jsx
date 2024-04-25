import React from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'

const Home = () => {
  return (
    <div className='flex bg-[#F6F8FA]'>
        <Sidebar/>
        <MainContent/>
    </div>
  )
}

export default Home