import React from 'react'

const PageSwitchOptions = () => {
  return (
    <div className='flex items-center justify-between mx-2 px-4 h-10 border-t'>
        <div className='flex items-center gap-2'>
            <p className='text-slate-500 text-sm'>Showing</p>
            <span className='text-sm font-semibold'>1-20</span>
            <p className='text-slate-500 text-sm'>From</p>
            <span className='text-sm font-semibold'>1250</span>
            <p className='text-slate-500 text-sm'>data</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className='px-3 py-1 text-md border rounded-md bg-black text-white font-medium'>1</div>
            <div className='px-3 py-1 text-md border rounded-md font-medium'>2</div>
            <div>...</div>
            <div className='px-3 py-1 text-md border rounded-md font-medium'>8</div>
        </div>
    </div>
  )
}

export default PageSwitchOptions