import { Listing, User } from '@prisma/client'
import React from 'react'
import ListingCard from '../components/listings/listingCard'


interface PropertiesClientProps {
    listings: Listing[] |null,
    currentUser?: User| null,
  }

const PropertiesClient:React.FC<PropertiesClientProps> = ({
    listings,
    currentUser

}) => {
  return (
    <div 
        className="
        m-5
          mt-10
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
        {listings?.map((listing: any) => (

         <ListingCard data={listing} currentUser={currentUser} key={listing.id}/>
        ))}
      </div>
  )
}

export default PropertiesClient