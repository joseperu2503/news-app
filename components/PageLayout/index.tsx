import Head from 'next/head'
import Link from 'next/link';
import React from 'react'

type Props = {
    title: string,
    children: React.ReactNode
};

const PageLayout = ({title, children} : Props) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <header className='bg-slate-800 px-8 py-3 flex items-center justify-between'>
            <span className='text-white text-xl'>News</span>
            <div className='flex gap-4 text-white'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
            </div>
        </header>
        <main className='pt-8 px-2 md:mx-auto max-w-5xl'>
            {children}
        </main>
    </>
    
  )
}

export default PageLayout