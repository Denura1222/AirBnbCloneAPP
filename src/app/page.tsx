 
import Image from 'next/image'
import { useState } from 'react'
import EmptyState from './components/emptyState'
import getListings from './actions/getListings'
import getCurrentUser from './actions/getCurrentUser'
import ListingCard from './components/listings/listingCard'

export default async function  Home() {

  const listings = await getListings()
  const currentUser = await getCurrentUser()



 if(listings?.length==0){

  return(
    <EmptyState showReset/>
  )
 }

  return (
    <div 
    className="
    m-10
      pt-24
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-6
      gap-8
    "
  >
    {listings?.map((listing)=>(
      <ListingCard key={listing.id} currentUser={currentUser} data={listing}/>

    ))}
   
  </div>
    
  )
}
