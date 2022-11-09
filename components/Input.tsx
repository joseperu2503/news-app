import React from 'react'

type Props = {
    value: string,
    setValue: (value: string) => void,
    type: string,
    label: string,
    placeholder: string,
    error: string[] | undefined
}

const Input = ({value, setValue, type, label, placeholder, error}: Props) => {

    const onInput = (event: string) => {
        setValue(event)
    }

    return (
        <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
            <input
                value={value}
                onChange={(event) => onInput(event?.target.value)}
                type={type}
                placeholder={placeholder}
                className={"h-10 bg-gray-50 border outline-none text-gray-900 text-sm rounded-lg focus:ring-1  block w-full p-2.5 " + (error ? 'border-red-500 focus:ring-red-500  focus:border-red-500' : 'border-gray-300 focus:ring-slate-500  focus:border-slate-500')}
            />
            {error && <span className='text-red-500 text-xs'>{error[0]}</span>}
        </div>
    )
}

export default Input
