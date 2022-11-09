import React, { useState } from 'react'
import Input from '@/components/Input'
import SocialButton from '@/components/SocialButton'
import Card from '@/components/Card'
import CheckBox from '@/components/CheckBox'
import LoginRegister from '@/layouts/LoginRegister'
import Link from 'next/link'
import { getSession, signIn } from 'next-auth/react'

type Errors = {
    email?: string[],
    password?: string[]
}

const LoginPage = ({session}: {session: any}) => {

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<Errors>({});
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(true);

    const onLogin = async () => {
      
    }

    const signUp = () => {

    }

    return (
        <LoginRegister>
            <Card>
                <h2 className="text-2xl font-bold">Welcome back</h2>
                <p className="text-sm font-light text-slate-500">
                    <span>Start your website in seconds. Don’t have an account?</span>
                    <span
                        className="text-primary-600 font-medium cursor-pointer ml-2 w-min"
                        onClick={signUp}
                    >
                        Sign up.
                    </span>
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
                    <Input
                        value={email}
                        setValue={setEmail}
                        label="Email"
                        type="text"
                        placeholder="joseperu2503@gmail.com"
                        error={errors.email}
                    />
                    <Input
                        value={password}
                        setValue={setPassword}
                        label="Password"
                        type="password"
                        placeholder="•••••••••"
                        error={errors.password}
                    />
                </div>
                <div className="mt-10 flex items-center">
                    <hr className="w-full border"/>
                    <span className="mx-4">or</span>
                    <hr className="w-full border"/>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-10">
                    <div onClick={() => signIn('github')}><SocialButton text="Sign in with Github" img={'/GithubLogo.png'}/></div>
                    
                    <SocialButton text="Sign in with Google" img={'/google.png'}/>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2">
                    <CheckBox value={remember} setValue={setRemember} label="Remember me"/>
                    <span className="text-sm text-slate-600 font-medium hover:underline cursor-pointer">Forgot password?</span>
                </div>
                <div className="mt-6">
                <button
                    type="button"
                    className="w-full text-white bg-slate-800 hover:bg-slate-600 shadow border font-medium rounded-lg text-sm px-5 py-2 flex justify-center items-center"
                    onClick={onLogin}
                >

                    Sign in to your account
                </button>
            </div>
            </Card>

        </LoginRegister>
    )
}

export const getServerSideProps = async (context: any) => {
    const session = await getSession(context)
    if(!session){ 
        return {
            props:{
                session
            }
        }
    }
    return {
        redirect: {
            destination: '/',
            permanent: false
        }
    }
    
}

export default LoginPage
