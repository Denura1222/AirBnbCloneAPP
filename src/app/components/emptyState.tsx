'use-client'
import React from 'react'
import Button from './button/button'
import { useRouter } from 'next/navigation'

interface EmptyStateProps {
    Title?: string,
    subTitle?: string,
    showReset?: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({
    Title = "No exact matches",
    subTitle = "Try changing or removing some of your filters",
    showReset
}) => {

    const router = useRouter();

    return (
        <div className='h-[60vh] flex flex-col justify-center items-center'>
            <h1 className='font-semibold'>{Title}</h1>
         <h1> {subTitle}</h1>

         <div className='mt-3'>
            {showReset && ( <Button label='Rest Filter' onClick={()=>router.push('/')}/>)}
           
         </div>
         </div>
    )
}

export default EmptyState