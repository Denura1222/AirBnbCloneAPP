"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback } from 'react'
import { IconType } from 'react-icons'
import qs from 'query-string'


interface categoryProps {
    label:string,
    description:string,
    icon:IconType,
    selected?:boolean
}
const CategoryBox : React.FC<categoryProps>= ({
    label,
    description,
    icon :Icon,
    selected
}

) => {

 const router = useRouter();
 const params = useSearchParams();


 const haddleClick = useCallback(()=>{

    
    let currentQuery={}

    if(params){
        currentQuery = qs.parse(params.toString());
        

    }
    const updateQuery :any={
        ...currentQuery,
        category:label

    }

    if(params?.get('category')== label){

        delete updateQuery.catergory;
    }

   

    const url =qs.stringifyUrl({
        url:'/',
        query:updateQuery
    },{skipNull:true})

    router.push(url)


 },[label,params,router])


  return (
    <div className={`flex flex-col items-center justify-center border hover:text-neutral-800 cursor-pointer ${selected ?'border-b-neutral-800':'border-transparent'}`} onClick={haddleClick}>
        <Icon size={26}/>
        <h1>{label}</h1>

    </div>
  )
}

export default CategoryBox