import AuthInput from "../components/auth/AuthInput";
import React from "react";
import {IconeAtencao} from "../components/icons";

export default function Autenticacao() {

    const [erro, setErro] = React.useState(null)
    const [modo, setModo] = React.useState<'login' | 'cadastro'>('login')
    const [email, setemail] = React.useState('')
    const [senha, setSenha] = React.useState('')

    function exibirErro(msg, tempoEmSegundos = 5){
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }

    function submeter() {
        if (modo === 'login') {
            console.log('login')
            exibirErro('Ocorreu um erro no login')
        } else {
            console.log('cadastro')
            exibirErro('Ocorreu um erro no cadastro')
        }
    }

    return (
        <div className={`flex h-screen items-center justify-center`}>

            <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
                <img src="https://source.unsplash.com/random" alt="imagem da tela de altenticação"
                     className={`h-screen w-full object-cover`}/>
            </div>

            <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
                <h1 className={`text-3xl font-bold mb-5 `}>
                    {modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}
                </h1>

                {erro ? (
                    <div className={`
                    flex items-center bg-red-400 text-white py-3 px-5 my-2 
                    border-2 border-red-700 rounded-lg
                `}>
                        {IconeAtencao()}
                        <span className={`ml-3 `}>
                            {erro}
                        </span>
                    </div>
                ) : false}

                <AuthInput label="E-mail"
                           tipo="email"
                           valor={email}
                           valorMudou={setemail}
                           obrigatorio/>

                <AuthInput label="Senha"
                           tipo="password"
                           valor={senha}
                           valorMudou={setSenha}
                           obrigatorio/>


                <button onClick={submeter} className={`
                w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3
                mt-6
            `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastre-se'}
                </button>

                <hr className={`my-6 border-gray-300 w-full `}/>

                <button onClick={submeter} className={`
                w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3
                mt-6
            `}>
                    Entrar com o Google
                </button>

                {modo === 'login' ? (
                    <p className="mt-8">
                        <a onClick={() => setModo('cadastro')} className={` text-blue-500 hover:text-blue-700
                        font-semibold cursor-pointer 
                        `}>Ainda não é cadastrado? Cadastre-se!!</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        <a onClick={() => setModo('login')} className={` text-blue-500 hover:text-blue-700
                        font-semibold cursor-pointer 
                        `}>Já possui cadastrado? Entre aqui!!</a>
                    </p>
                )}

            </div>
        </div>
    );
}