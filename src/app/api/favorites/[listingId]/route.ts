import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import  Prisma  from "@/app/libs/prismadb";
import { data } from "autoprefixer";

interface IParams{
  listingId?:string;
}

export async function POST(

    request:Request,
    {params}:{params:IParams}

){
    if(!getCurrentUser){
        return NextResponse.error()
    }

    const currentuser = await getCurrentUser()

    const listingId = params;

     if(!listingId.listingId || typeof listingId.listingId !== 'string'){

        throw new Error('Invalid ID');

     }

     let favoriteIds =[...(currentuser?.favoriteIds || [])]

     favoriteIds.push(listingId.listingId);
     

     const user = await Prisma.user.update({
        where:{
            id:currentuser?.id
        },
        data:{
            favoriteIds
        }
     })

     return NextResponse.json(user)

}


export async function DELETE(

    request:Request,
    {params}:{params:IParams}

){

    if(!getCurrentUser){
        return NextResponse.error()
    }

    const currentuser = await getCurrentUser();

    const {listingId} = params;

     if(!listingId || typeof listingId !== 'string'){

        throw new Error('Invalid ID');

     }

     let favoriteIdss = [...(currentuser?.favoriteIds || [])];

     console.log('current favs', favoriteIdss);

     let favoriteIds = favoriteIdss.filter((id) => id !== listingId);

     console.log(' new current favs', favoriteIds);

    


     const user = await Prisma.user.update({
        where:{
            id:currentuser?.id
        },
        data:{
            favoriteIds
        }
     })
        

     
     return NextResponse.json(user)


    

    



}