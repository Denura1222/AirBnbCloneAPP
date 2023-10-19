'use client';

import React from 'react'
import Image from 'next/image'
import { User,Listing } from '@prisma/client'
import HeartButton from '../heartButton/heartButton'

interface ListingHeaderProps{
    title:string |undefined,
    listingId:string |undefined,
    imageSrc:string |undefined,
    location:string |undefined,
    currentUser:User | undefined
    
}


const ListingHeader:React.FC<ListingHeaderProps> = ({
    title,
    listingId,
    imageSrc,
    location,
    currentUser,

}) => {
  return (
    <div>
      <div><h1 className='font-semibold m-3 text-[30px]'>{title},{location}</h1></div>
        <div className="
          overflow-hidden 
          rounded-xl
          relative
          m-3
        ">
            <Image src={imageSrc} alt='image' className="object-cover w-full" height={1000} width={1200}/>
            <div className='absolute top-5 right-2'>

               <HeartButton currentUser={currentUser} listingId={listingId}/>

            </div>
          
        </div>
    </div>
  )
}

export default ListingHeader