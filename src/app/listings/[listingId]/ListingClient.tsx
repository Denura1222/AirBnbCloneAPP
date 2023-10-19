'use client';

import { User,Listing,Reservation } from '@prisma/client'
import React, { useEffect, useMemo, useState } from 'react'
import ListingHeader from '@/app/components/listings/ListingHeader'
import ListingInfo from '@/app/components/listings/ListingInfo'
import { categories } from '@/app/components/Navbar/category'
import { Range } from 'react-date-range';
import { differenceInDays, eachDayOfInterval } from 'date-fns';
import ListingReservation from '@/app/components/listings/listingReservation';




interface ListingClientProps{
    listing:Listing |null
    currentUser?:User | null
    reservation?:Reservation[]
}
const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
};

const ListingClient:React.FC<ListingClientProps> = ({
    listing,
    currentUser,
    reservation =[],


}) => {

  const [dataRange,setDataRange]=useState<Range>(initialDateRange)
  const [totalPrice, setTotalPrice] = useState(listing?.price);
  const [isLoading, setIsLoading] = useState(false);


  const disabledDates = useMemo(()=>{

    let dates:any =[]

    reservation.forEach((reservation:any)=>{

      const range =eachDayOfInterval({
        start:new Date(reservation.startDate),
        end :new Date(reservation.endDate)
      })


    dates =[...dates,...range]
  })

  return dates;


  },[reservation])


  const category = useMemo(()=>{

   return categories.find((items)=> items.label== listing?.category)

  },[categories,listing])

  useEffect(()=>{

    if(dataRange.startDate && dataRange.endDate){
      const dayCount = differenceInDays(
        dataRange.endDate, 
        dataRange.startDate
      )

      if(dayCount && listing?.price){
        setTotalPrice(dayCount*listing?.price)
      }else{
        setTotalPrice(listing?.price)
      }
    }
    
    

  },[listing?.price,dataRange])


  return (
    <div className=''>
        <ListingHeader currentUser={currentUser} listingId={listing?.id}  title={listing?.title} location={listing?.locationValue} imageSrc={listing?.imageSrc}/>
        <ListingInfo CurrentUser={currentUser} roomCount={listing?.roomCount} bathroomCount={listing?.bathroomCount} guestCount={listing?.guestCount} locationValue={listing?.locationValue} category={category}  description={listing?.description}/> 
        {/* <ListingReservation dataRange={dataRange} onChangeDate={(value) => setDataRange(value)}  price={listing?.price} totalPrice={totalPrice} disabled={isLoading} disabledDates={disabledDates}/> */}
    </div>
  )
}

export default ListingClient