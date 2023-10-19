"use client"
import React, { useState, useCallback } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import MenuItem from './MenuItem'
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";
import { User } from '@prisma/client';
import {signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation';



interface UserItemProps {
  currentUser?: User

}

const UserMenu: React.FC<UserItemProps> = ({
  currentUser

}) => {

  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const name = 'denura'


  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };

  const onRent = useCallback(()=>{
    if(!currentUser){
      return loginModal.onOpen()

    }

    rentModal.onOpen();

  },[rentModal,loginModal,currentUser])

  return (
    <div className="flex flex-row justify-center items-center">
      <div
        onClick={onRent}
        className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
      >
        Airbnb your home
      </div>
      <div
        className="hover:bg-neutral-100 p-4 rounded-full cursor-pointer"
        onClick={toggleOpen}
      >
        <AiOutlineMenu />

      </div>
      {isOpen && <div className=' absolute 
            rounded-xl 
            shadow-md
            w-[10px]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm'>


        <div className='flex flex-col cursor-pointer'>

          {currentUser ? (

            <>
             <MenuItem
            label = "my trips"
            onClick = {()=>{}}
          />
          <MenuItem
            label="my favorites"
            onClick={()=>router.push('/favorites')}
          />
           <MenuItem
            label = "my reservations"
            onClick = {()=>{}}
          />
          <MenuItem
            label="my properties"
            onClick={()=>router.push('/myProperties')}
          />
           <MenuItem
            label="airbnb my home"
            onClick={rentModal.onOpen}
          />
          <hr/>
          <MenuItem
            label="sign out"
            onClick={()=>signOut()}
          />
          
            </> 
          ): (

            <>
          <MenuItem
            label = "Sign up"
            onClick = {registerModal.onOpen}
          />
          <MenuItem
            label="login up"
            onClick={loginModal.onOpen}
          />
        </>

          )}




      </div>





      </div>}
    </div >

  )
}

export default UserMenu