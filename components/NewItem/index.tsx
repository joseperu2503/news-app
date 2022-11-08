import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Article } from '@/interfaces'

const NewItem = ({article}: {article: Article}) => {
    return (
        <article className='rounded-lg border border-slate-200 shadow-md flex flex-col justify-between'>
            <div>
                <Image
                    src={article.urlToImage?article.urlToImage:''}
                    alt={`image`}
                    className='rounded-t-lg'
                    width={350}
                    height={350}
                />
                <div className='p-3 '>
                    <h2 className='font-semibold text-lg leading-tight'>{article.title}</h2>
                    {article.author && <p className='text-sm mt-2'>{article.author}</p>}
                    <p className='mt-8 leading-tight'>{article.description}</p>
                </div>
            </div>
            <div className='pb-3 px-3 flex justify-end'>
                <Link className='py-1 px-2 bg-slate-800 text-white rounded-md text-xs hover:bg-slate-700' href={article.url}>See more</Link>
            </div>
            
        </article>
    )
}

export default NewItem