import AuthInput from "../components/auth/AuthInput";
import React from "react";

export default function Autenticacao() {

    const [modo, setModo] = React.useState<'login' | 'cadastro'>('login')
    const [email, setemail] = React.useState('')
    const [senha, setSenha] = React.useState('')

    return (
        <div>
            <h1>Autenticação</h1>
            <AuthInput label="E-mail"
                tipo="email"
                valor={email}
                valorMudou={setemail}
                obrigatorio />

            <AuthInput label="Senha"
                tipo="password"
                valor={senha}
                valorMudou={setSenha}
                obrigatorio/>
        </div>
    );
}