import React from 'react'

type Props = {
    value: boolean,
    setValue: (value: boolean) => void,
    label: string,
}

const CheckBox = ({value, setValue, label}: Props) => {

    const onClick = () => {
        setValue(!value)
    }

    return (
        <div className="flex">
            <div
                className={ 'w-5 h-5 border rounded flex items-center justify-center cursor-pointer ' + ( value ? 'bg-slate-800 text-white' : '') }
                onClick={onClick}
            >
                { value && <i className="fas fa-check text-xxs" aria-hidden></i>}
            </div>
            <label className="ml-2 text-sm text-slate-500 font-normal">{label}</label>
        </div>
    )
}

export default CheckBox
