import React from 'react'

type Props = {
    children: React.ReactNode
};

const Card = ({children}: Props) => {
    return (
        <div className="bg-white w-full shadow-md rounded-lg p-8">
            { children }
        </div>
    )
}

export default Card
