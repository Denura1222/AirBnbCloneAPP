"use client"
import React from 'react'
import Modal from './Modals'
import useRentModal from "@/app/hooks/useRentModal";
import { categories } from "@/app/components/Navbar/category"
import CategoryInput from '@/app/components/inputs/categoryInput'
import CountrySelect from '@/app/components/inputs/countrySelect'
import Counter from '@/app/components/inputs/counter'
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";
import { useState } from 'react';
import Inputs from '../inputs/Inputs';
import ImageUpload from '@/app/components/inputs/imageUpload'
import axios from 'axios';
import { data } from 'autoprefixer';
import { toast } from 'react-hot-toast';
import  { useRouter } from 'next/navigation'



enum STEPS {

    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,

}





const RentModal = () => {

    const [step, stepStep] = useState(STEPS.CATEGORY)
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(false)

    const onBack = () => {
        stepStep((value) => value - 1);
    }
    const onNext = () => {
        stepStep((value) => value + 1);
    }




    const { register, handleSubmit, setValue, watch, formState: { errors }, reset } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            locationValue: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: '',
            price: 1,
            title: '',
            description: '',

        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.PRICE) {
            return onNext()
        }

        setIsLoading(true)

        axios.post("/api/listings",data).then(()=>{
            toast.success("listing is created")
            router.refresh();
            reset();   
            stepStep(STEPS.CATEGORY)
            rentModal.onClose()
        }).catch(()=>{
            toast.error('error when listing')
        }).finally(()=>{
            setIsLoading(false)
        })
    }

    const category = watch('category');
    const location = watch('location');
    const guestCount = watch('guestCount');
    const roomCount = watch('roomCount');
    const bathroomCount = watch('bathroomCount');
    const imageSrc = watch('imageSrc');
    console.log("guest:", guestCount)


    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })
    }


    let bodycontent = (
        <div>
            <div className='mb-2'>
                <h1 className='text-lg font-semibold'>Which of these best describe your place?</h1>
                <h1>pick a category</h1>
            </div>
            <div className=' flex-col grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto'>
                {categories.map((item) => (

                    <CategoryInput label={item.label} icons={item.icon} onClick={(category) =>
                        setCustomValue('category', category)}
                        selected={category === item.label}
                        
                        />
                ))}

            </div>

        </div>


    )

    if (step == STEPS.LOCATION) {
        bodycontent = (
            <div>
                <div className='mb-2'>
                    <h1 className='text-lg font-semibold'>Select your country?</h1>
                    <h1>country</h1>
                </div>
                <div className=''>
                    <CountrySelect onChange={(value) => setCustomValue('location', value)} value={location} />


                </div>

            </div>

        )

    }

    if (step == STEPS.INFO) {
        bodycontent = (
            <div>
                <div className='mb-2'>
                    <h1 className='text-[25px] font-semibold'>Share some basics about your place</h1>
                    <h1>what amenities do you have</h1>
                </div>
                <div className='flex flex-col gap-2'>
                    <Counter value={guestCount} title='guest' subTitle='how many guest do you allow' onChange={(value) => setCustomValue('guestCount', value)} />
                    <Counter value={roomCount} title='rooms' subTitle='how many room do you allow' onChange={(value) => setCustomValue('roomCount', value)} />
                    <Counter value={bathroomCount} title='bathrooms' subTitle='how bathrooms do you allow' onChange={(value) => setCustomValue('bathroomCount', value)} />


                </div>

            </div>


        )

    }

    if (step == STEPS.IMAGES) {
        bodycontent = (
            <div className='mb-2'>
                <h1 className='text-[25px] font-semibold'>Add a photo of your place</h1>
                <h1>show guests what yuour place looks like</h1>
                <div>
                    <ImageUpload onChange={(value) => setCustomValue('imageSrc', value)}
                        value={imageSrc} />

                </div>
            </div>


        )

    }

    if (step == STEPS.DESCRIPTION) {
        bodycontent = (
            <div className='mb-2'>
                <div className='mb-5'><h1 className='text-[25px] font-semibold'>Share details about your place</h1>
                    <h1>Description</h1></div>

                <div className='flex flex-col gap-3'>

                    <Inputs register={register} required errors={errors} id='title' label='title' />
                    <Inputs register={register} required errors={errors} id='description' label='description' />


                </div>
            </div>
        )

    }

    if (step == STEPS.PRICE) {
        bodycontent = (
            <div className='mb-2'>
                <div className='mb-5'><h1 className='text-[25px] font-semibold'>Choose price</h1>
                    <h1>Price</h1></div>

                <div className='flex flex-col gap-3'>

                    <Inputs formatPrice register={register} required errors={errors} id='price' label='price' />


                </div>
            </div>

        )

    }



    const rentModal = useRentModal();
    return (
        <Modal
            title="Login"
            actionLabel="Next"
            onClose={rentModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            isOpen={rentModal.isOpen}
            body={bodycontent}
            secondaryAction={step == STEPS.CATEGORY ? undefined : onBack}
            secondaryActionLabel='back'
        />
    )
}
export default RentModal