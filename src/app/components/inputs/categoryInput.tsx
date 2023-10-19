import React from 'react'
import { IconType } from 'react-icons'

interface categoryInputProps {
  icons:IconType,
  label:string,
  selected?:boolean,
  onClick :(value:string)=>void,

}


const categoryInput:React.FC<categoryInputProps> = ({
  icons :Icon,
  label,
  selected,
  onClick

}) => {
  return (
    <div onClick={()=>onClick(label)} className={`flex flex-col border-2 rounded-lg p-3 hover:border-black transition cursor-pointer ${selected?'border-black':'border-neutral-200'}`}>
      <Icon size={30}/>
      <div className='font-semibold'>
        {label}
      </div>

    </div>
  )
}

export default categoryInput