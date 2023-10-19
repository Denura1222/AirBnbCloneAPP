"use-client"
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCallback } from "react";

interface counterProps {
    title:string,
    subTitle:string,
    onChange:(value:number)=>void
    value:number
}

const Counter:React.FC<counterProps> = ({
    title,
    subTitle,
    onChange,
    value
    
}) => {


    // const OnAdd=()=>{
    //     onChange(value+1)


    // }

    // const OnReduce=()=>{
    //     if(value == 1){
    //         return undefined
    //     }
    //     onChange(value-1)


    // }

    const OnAdd = useCallback(() => {
        onChange(value + 1);
      }, [onChange, value]);

      console.log("re-render")

      const OnReduce = useCallback(() => {
        if(value == 1){
            return undefined
        }
        onChange(value-1)
      }, [onChange, value]);

      console.log("re-render")

   
  return (
    <div className='flex flex-row justify-between'>
        <div className=''> <h1 className='font-semibold'>{title}</h1> <h1 className='text-sm'>{subTitle}</h1>
        
        </div>
        <div className='flex flex-row gap-2 items-center '>
            <div onClick={OnReduce} className='p-2 border-[1px] rounded-full mr-3 hover:bg-slate-100 cursor-pointer'><AiOutlineMinus/> </div> 
            <div>{value} </div> 
            <div onClick={OnAdd} className='p-2 border-[1px] rounded-full ml-3  hover:bg-slate-100 cursor-pointer'><AiOutlinePlus/> </div> 
            </div>
    </div>
  )
}

export default Counter