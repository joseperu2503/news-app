import React, { useState } from 'react'

export default function Searcher({ value,setValue }: {value: string, setValue: (value: string) => void}) {

    const onChangeValue = (value: string) => {
        setValue(value)
    }

    return (
        <div className={`flex bg-white rounded-md py-2 px-4 items-center w-full border-slate-500 border-2 shadow-md`}>
            <input 
                className={`w-full outline-none` }
                placeholder="Buscar"
                value={value}
                onChange={event => onChangeValue(event?.target.value)}
            />
            {value.length > 0 ? 
                <i className="fas fa-times text-slate-400 cursor-pointer hover:text-slate-700" onClick={event => onChangeValue('')}></i>
            : 
                <i className="fas fa-search text-slate-400"></i>
            }
        </div>
    )
}
