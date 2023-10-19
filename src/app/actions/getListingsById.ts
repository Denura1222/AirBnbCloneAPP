import Prisma from "@/app/libs/prismadb"

interface IParams{
    listingId?:string |undefined
}


export default async function getListingsById(params:IParams) {

    const {listingId} = params

    try {
        
        const getListingsById = Prisma.listing.findUnique({

            where:{
             id:listingId 
            },
            include:{

                user:true

            }
          

        })

        if(!getListingsById){
            return null;


        }
        return getListingsById
    } catch (error:any) {

        throw new Error(error)
        
    }


    
}