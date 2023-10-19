import Prisma  from "@/app/libs/prismadb";

interface Iparams{
    UserId:string |undefined;
}


export default async function getListingsByUid(params:Iparams) {

    const {UserId} =params


    try {

        const listings = Prisma.listing.findMany({
            where:{
                userId:UserId
            }

        })


        if(!listings){
            return null
        }


        return listings

        
        
    } catch (error:any) {

        throw new Error(error)
        
    }

    
}