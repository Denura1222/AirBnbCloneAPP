import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import LoginModal from "../components/modals/LoginModal";
import getCurrentUser from "../actions/getCurrentUser";
import useLoginModal from "./useLoginModal";
import { User } from '@prisma/client'

interface favoriteProps{
    currentuser:User | undefined
    listingid:string
}

const useFavorite =({currentuser,listingid}:favoriteProps)=>{
    const loginModal = useLoginModal()
    const router = useRouter()

    const hasFavorited =useMemo(()=>{

        const Currentuser =currentuser?.favoriteIds || [];

        return Currentuser.includes(listingid);


    },[currentuser,listingid])

    const toggleFavorite = useCallback(async (e:React.MouseEvent<HTMLDivElement>)=>{
        e.stopPropagation();

        let request;



        if(!currentuser){
            
            return loginModal.onOpen();
        }

        try {
            if(hasFavorited){
                request =() =>axios.delete(`/api/favorites/${listingid}`);
    
            }else{
                request =()=>axios.post(`/api/favorites/${listingid}`)
            }
    
            await request()
            router.refresh()
            toast.success('success')
            
        } catch (error) {

            toast.error('something went wrong')
            
        }

       



    },[currentuser,hasFavorited,listingid,router,loginModal])

    return {
        hasFavorited,
        toggleFavorite,
      }



}

export default useFavorite;
