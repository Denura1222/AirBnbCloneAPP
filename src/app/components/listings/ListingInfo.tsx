'use client';

import { User } from '@prisma/client'
import React from 'react'
import { IconType } from 'react-icons';
import Image from 'next/image';
import ListingCategory from "./ListingCategory";




interface ListingInfoProps {
    CurrentUser: User,
    description: string | undefined
    guestCount: number | undefined,
    roomCount: number | undefined,
    bathroomCount: number | undefined,
    locationValue: string | undefined
    category: {
        icon: IconType,
        label: string,
        description: string;
    } | undefined
}

const ListingInfo: React.FC<ListingInfoProps> = ({
    CurrentUser,
    description,
    guestCount,
    roomCount,
    bathroomCount,
    locationValue,
    category
}) => {

    console.log('denura:',description)
    return (
        <div className='m-3'>
            <div className='flex flex-row gap-1' >
                <h1 className='font-bold'>Hostet by {CurrentUser.name}</h1>
            </div>
            <div className='flex flex-row gap-4 mb-4' >
                <h1 className='font-bold text-zinc-400'> {roomCount}  guest </h1>
                <h1 className='font-bold text-zinc-400'> {roomCount}  rooms</h1>
                <h1 className='font-bold text-zinc-400'> {bathroomCount}  bathrooms</h1>
            </div>
            <hr />
            <div className='mt-4 mb-3'>
                {category && (
                    <ListingCategory
                        icon={category.icon}
                        label={category?.label}
                        description={category?.description}
                    />
                )}
            </div>
            <hr />

            <div className='mt-3'>
                <h1>{description}</h1>
            </div>


        </div>


    )
}

export default ListingInfo