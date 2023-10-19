import React from 'react'
import Calender from '../inputs/Calender';
import DatePicker from 'react-datepicker'


interface listingReservationProps{

    price: number;
    dateRange: Range,
    totalPrice: number;
    onChangeDate: (value: Range) => void;
    onSubmit: () => void;
    disabled?: boolean;
    disabledDates: Date[];

}
 const listingReservation:React.FC<listingReservationProps> = ({
    price,
    dateRange,
    totalPrice,
    onChangeDate,
    onSubmit,
    disabled,
    disabledDates,

}) => {
  return (
    <DatePicker/>
   
  )
}

export default listingReservation;
