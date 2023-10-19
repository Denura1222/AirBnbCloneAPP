"use-client"

import useCountries from '@/app/hooks/useCountries'
import { type } from 'os'
import React from 'react'
import Select from 'react-select'

export type countrySelectValue = {
    flag: string;
    label: string;
    latlng: number[];
    region: string;
    value: string;
}

interface countrySelectProps {

    value?: countrySelectValue;
    onChange: (value: countrySelectValue) => void;

}

const CountrySelect: React.FC<countrySelectProps> = ({
    value,
    onChange
}) => {

    const { getAll } = useCountries()
    return (
        <Select
            placeholder="Anywhere"
            isClearable
            options={getAll()}
            value={value}
            onChange={(value)=>onChange(value as countrySelectValue)}

        />
    )
}

export default CountrySelect