import { useSession, signOut } from 'next-auth/react';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    title: string,
    children: React.ReactNode
};

const PageLayout = ({title, children} : Props) => {

    const {data, status} = useSession()
    console.log(data,status)

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
                <div className='flex items-center space-x-2'>
                    {data 
                        ? 
                            <>
                                <p className='text-white'>{data?.user?.name}</p>
                                {data?.user?.image != undefined && <Image src={data?.user?.image} alt="" height={35} width={35} className='rounded-full'/>}
                                {/* <Link href='/api/auth/signout' className='border border-white px-2 py-1 rounded-md text-white hover:bg-white hover:text-slate-800'>Sing out</Link> */}
                                <button onClick={() => signOut()} className='border border-white px-2 py-1 rounded-md text-white hover:bg-white hover:text-slate-800'>Sing out</button>

                            </>
                        :
                            <>
                                <Link href='/login' className='border border-white px-2 py-1 rounded-md text-white hover:bg-white hover:text-slate-800'>Sing in</Link>
                            </>
                    }
                </div>
                
            </header>
            <main className='pt-8 px-2 md:mx-auto max-w-5xl'>
                {children}
            </main>
        </>
        
    )
}

export default PageLayout