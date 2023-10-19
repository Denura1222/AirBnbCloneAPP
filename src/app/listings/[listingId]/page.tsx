import React, { useEffect } from 'react'
import getListingsById from '@/app/actions/getListingsById'
import Image from 'next/image'
import HeartButton from '@/app/components/heartButton/heartButton'
import getCurrentUser from '@/app/actions/getCurrentUser'
import getReservation from '@/app/actions/getReservation'
import ListingClient from './ListingClient'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'



interface Iparams {

  listingId?: string;

}
  



const ListingPage = async ({ params }: { params: Iparams }) => {

  const listings = await getListingsById(params) || null;
  const currentUser = await getCurrentUser() || null;
  const reservation = await getReservation(params)


  return (

    <ListingClient listing={listings} currentUser={currentUser} reservations={reservation}/>


  
  )

}

export default ListingPage