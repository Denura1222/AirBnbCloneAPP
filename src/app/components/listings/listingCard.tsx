"use client"

import { Listing, Reservation, User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import HeartButton from '../heartButton/heartButton'
import { useRouter } from "next/navigation";


interface ListingCardProps {
    reservation?: Reservation
    data: Listing
    onAction?: (id: string) => void
    disabled?: boolean
    actionLabel?: string;
    actionId: string
    currentUser?: User
}

const ListingCard: React.FC<ListingCardProps> = ({
    reservation,
    data,
    onAction,
    disabled,
    actionLabel,
    actionId,
    currentUser
}) => {

    const router = useRouter();
    return (
        <div className='flex flex-col gap-1 w-full' onClick={()=>router.push(`/listings/${data.id}`)}>
            <div className='overflow-hidden w-full rounded-xl relative aspect-square    '>       
                 <Image src={data?.imageSrc} alt='image' width={200} height={200} className=' h-full w-full object-cover rounded-lg cursor-pointer hover:scale-110 transition' />
                <div className='absolute top-4 right-3'>
                   <HeartButton currentUser={currentUser} listingId={data.id}/>
               </div>
             
            </div>
            <div className='font-semibold'>
                {data.locationValue}
            </div>
            <div className='font-light text-neutral-500'>
                {data.category}
            </div>
            <div className='font-semibold'>
                $ {data.price}
            </div>

        </div>
    )
}

export default ListingCard