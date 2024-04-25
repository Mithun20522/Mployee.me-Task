import React from 'react'
import JobDetailsCard from './JobDetailsCard'

const MainContent = () => {
  return (
    <div className=' w-[100%] mx-5 mt-5 bg-white border rounded-xl p-5 space-y-2'>
        <span className='mx-8 mb-5'>Jobs{'('}44{')'}</span>
        <div className='flex flex-col gap-2 overflow-y-auto max-h-[70vh]'>
            <JobDetailsCard percent={92} color={'green'}/>
            <JobDetailsCard percent={87} color={'yellow'}/>
            <JobDetailsCard percent={87} color={'yellow'}/>
            <JobDetailsCard percent={87} color={'yellow'}/>
        </div>
    </div>
  )
}

export default MainContent