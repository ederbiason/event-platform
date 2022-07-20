import { FormEvent, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import mockupImage from '../assets/images/code-mockup.png'
import { AuthGithubContext } from "../contexts/authGithub";
import { GithubLogo } from 'phosphor-react'

export function Subscribe() {
    const { signInWithGithub, signed } = useContext(AuthGithubContext)

    async function loginGithub() {
        await signInWithGithub()
    }

    // const navigate = useNavigate()

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')

    // const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    // async function handleSubscribe(event: FormEvent) {
    //     event.preventDefault();

    //     await createSubscriber({
    //         variables: {
    //             name,
    //             email,
    //         }
    //     })

    //     navigate('/event')
    // }

    

    if(!signed) {
        return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center lg:relative">
            <div className="w-full max-w-[1100px] flex lg:flex-row flex-col items-center justify-between lg:mt-20 mt-10 mx-auto">
                <div className="max-w-[640px]">
                    <div className="flex lg:justify-start justify-center">
                        <Logo />
                    </div>
                    <h1 className="mt-8 text-[2.5rem] leading-tight lg:text-left text-center lg:p-0 px-5">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed lg:text-left text-center lg:p-0 px-7">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded lg:mt-0 mt-6">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                    {/* <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text" 
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                        />

                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text" 
                            placeholder="Digite seu e-mail"
                            onChange={event => setEmail(event.target.value)}
                        /> */}
                            
                        <button
                            type="submit"
                            // disabled={loading}
                            className="flex items-center justify-center gap-3 mt-4 bg-gray-500 uppercase py-4 rounded font-bold text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 w-full"
                            onClick={loginGithub}
                        >
                            <GithubLogo size={32} className="text-green-500" />
                            Entrar com Github
                        </button>
                    {/* </form> */}
                </div>
            </div>

            <img src={mockupImage} className="lg:mt-10 mt-0" alt="bottom image subscribe" />

            <div className="w-full lg:absolute lg:bottom-0">
                <Footer />
            </div>
        </div>
    )
    } else {
        return <Navigate to="/" />
    }
}