import  Prisma  from "@/app/libs/prismadb";


interface Iparams{
    listingId?:string ;
    userId?: string;
    authorId?: string;
}



export default async function getReservation(params:Iparams) {

    try {
        
        const {listingId,userId,authorId} = params;
        const query:any ={};

        if(listingId){

            query.listingId = listingId;


        }

        if(userId){
            query.userId = userId
            


        }
        if(authorId){
            query.listing = { userId: authorId };

        }

        const reservation = Prisma.reservation.findMany({

            where: query,
            include:{
                listing:true
            },
            orderBy:{
                createdAt:'desc'
            }
        })

        return reservation;


    } catch (error:any) {
        throw new Error(error)
    
    }
    
}