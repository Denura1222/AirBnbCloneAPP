"use client"
import React from 'react'
import {BiSearch} from 'react-icons/bi'

const Search = () => {
  return (
    <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md items-center justify-between'>
        
        <div className='flex flex-row items-center justify-center'> 
        <div className='text-sm font-semibold px-6'>
            Anywhere
        </div>

        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
            Any Week
        </div>
        <div className="flex flex-row pl-2 pr-2  gap-3 items-center text-center">
            <div className='text-sm sm:block '>
                Add Guest
                
            </div>
            <div className='bg-rose-500 rounded-full p-2'>
                <BiSearch size={18}/>
                 
            </div>
        </div>

        </div>
        
    </div>
  )
}

export default Search