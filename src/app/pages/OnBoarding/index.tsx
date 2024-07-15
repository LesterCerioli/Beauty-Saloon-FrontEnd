
"use client";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { NextPage } from "next";

export const OnBoarding: NextPage = () => {
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [tipoAtendimento, setTipoAtendimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [localizacao, setLocalizacao] = useState("");
    const [localizacaoNumero, setLocalizacaoNumero] = useState("");

    return (
        <main className="flex justify-center h-screen items-center bg-custom-secundaria">
            <form className="flex flex-col justify-center items-center bg-custom-principal w-72 h-auto py-8 gap-3 rounded-xl">
                <h1 className="text-custom-secundaria text-xl">Cadastrar Empresa</h1>     
                <div className="flex flex-col mb-2 gap-1 text-custom-secundaria">
                    <label className="w-64">Nome fantasia da empresa:</label>
                    <input 
                        type="text" 
                        placeholder="Insira o nome fantasia" 
                        value={nomeFantasia} 
                        onChange={(e) => setNomeFantasia(e.target.value)}
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64"
                    />
                </div>
                
                <div className="flex flex-col mb-2 gap-1 text-custom-secundaria">
                    <label className="w-64">Razão social da empresa:</label>
                    <input 
                        type="text" 
                        placeholder="Insira a razão social" 
                        value={razaoSocial} 
                        onChange={(e) => setRazaoSocial(e.target.value)}
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64"
                    />
                </div>

                <div className="flex flex-col mb-2 gap-1 text-custom-secundaria">
                    <label className="w-64">CNPJ da empresa:</label>
                    <InputMask 
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64"
                        mask="99.999.999/9999-99" 
                        placeholder="Insira o CNPJ"
                        value={cnpj} 
                        onChange={(e) => setCnpj(e.target.value)}
                        required
                    >
                    </InputMask>
                </div>

                <div className="flex flex-col mb-2 gap-1 text-custom-secundaria">
                    <label className="w-64">Localização do salão:</label>
                    <div className="flex items-center gap-1">
                    <input 
                        type="text" 
                        placeholder="Insira a rua" 
                        value={localizacao} 
                        onChange={(e) => setLocalizacao(e.target.value)}
                        className="w-44 px-2 py-1 rounded-xl transition-all duration-500 focus:w-52"
                    />
                    <span>-</span>
                    <input 
                        type="text" 
                        placeholder="N.º" 
                        value={localizacaoNumero} 
                        onChange={(e) => setLocalizacaoNumero(e.target.value)}
                        className="w-12 px-2 py-1 rounded-xl transition-all duration-500 focus:w-20"
                    />
                    </div>
                </div>

                <div className="flex flex-col mb-2 gap-1">
                    <label className="w-64 text-custom-secundaria">Especialização do salão:</label>
                    <select 
                        value={tipoAtendimento} 
                        onChange={(e) => setTipoAtendimento(e.target.value)} 
                        className="w-60 py-1 rounded-xl transition-all duration-500 focus:w-64 text-gray-400"
                    >
                        <option value="">Selecione...</option>
                        <option className="w-full">Salão Masculino</option>
                        <option className="w-full">Salão Feminino</option>
                        <option className="w-full">Salão Unissex</option>
                    </select>
                </div>

                <div className="flex flex-col mb-2 gap-1 text-custom-secundaria">
                    <label className="w-64">Email:</label>
                    <input
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64" 
                        placeholder="Insira o email"
                    />
                </div>

                <div className="flex flex-col mb-2 gap-1 text-custom-secundaria">
                    <label className="w-64">Senha:</label>
                    <input
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)}
                        type="password"
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64" 
                        placeholder="Crie uma senha"
                    /> 
                </div>
                
                <button 
                    type="submit" 
                    className="border border-transparent px-4 py-2 rounded-xl flex items-center gap-2 bg-custom-secundaria text-white"
                >
                    Cadastrar <BsArrowRightCircleFill />
                </button>
            </form>
        </main>
    );
}