"use client"

import { faClock, faRulerCombined, faCreditCard, faCheckCircle, faStar, faCommentDots } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'
import * as Sentry from '@sentry/nextjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faIdCard, faCar, faMapMarkerAlt, faIdBadge, faUser, faCarSide, faPalette, faGasPump, faChair } from '@fortawesome/free-solid-svg-icons'

export default function Motorista() {
  const [modoEdicao, setModoEdicao] = useState(false)

  const [nome, setNome] = useState('João Ribamar')
  const [email, setEmail] = useState('joaoribamar@gmail.com')
  const [telefone, setTelefone] = useState('(98) 98745-3629')
  const [cnh, setCnh] = useState('12345678900')

  const [marca, setMarca] = useState('Volkswagen')
  const [modelo, setModelo] = useState('Gol')
  const [placa, setPlaca] = useState('ABC1D23')
  const [cor, setCor] = useState('Prata')
  const [combustivel, setCombustivel] = useState('Flex')
  const [assentos, setAssentos] = useState(5)
  const [arCondicionado, setArCondicionado] = useState(true)

  const [corridas, setCorridas] = useState([
    { passageiro: 'Maria Souza', localViagem: 'Avenida Brasil, 345', destino: 'Rua do Sol, 890', valor: 'R$ 25,00', data: '2025-04-20 10:30', duracao: '15 min', distancia: '8 km', pagamento: 'Cartão', status: 'Concluída', classificacao: '4.8', comentarios: 'Viagem tranquila e rápida.' },
    { passageiro: 'Pedro Oliveira', localViagem: 'Rua da Paz, 123', destino: 'Praça da Liberdade, 456', valor: 'R$ 30,00', data: '2025-04-20 11:00', duracao: '20 min', distancia: '12 km', pagamento: 'Dinheiro', status: 'Concluída', classificacao: '4.5', comentarios: 'Motorista muito educado.' },
    { passageiro: 'Ana Costa', localViagem: 'Avenida Independência, 678', destino: 'Shopping Central, 123', valor: 'R$ 40,00', data: '2025-04-20 12:00', duracao: '30 min', distancia: '15 km', pagamento: 'Cartão', status: 'Concluída', classificacao: '5.0', comentarios: 'Ótimo serviço!' }
  ])

  const denunciarCorrida = () => {
    alert('Corrida denunciada!')
  }

  const salvarEdicao = () => {
    // Validação dos campos pessoais
    if (!nome || !/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
      const errMsg = 'Nome inválido. Use apenas letras e espaços.';
      window.alert(errMsg);
      Sentry.captureException(new Error(errMsg));
      return;
    }
    if (!cnh || !/^\d{11}$/.test(cnh.replace(/\D/g, ''))) {
      const errMsg = 'CNH inválida. Deve conter 11 dígitos numéricos.';
      window.alert(errMsg);
      Sentry.captureException(new Error(errMsg));
      return;
    }
    if (!telefone || !/^\d{8,}$/.test(telefone.replace(/\D/g, ''))) {
      const errMsg = 'Telefone inválido. Deve conter pelo menos 8 dígitos numéricos.';
      window.alert(errMsg);
      Sentry.captureException(new Error(errMsg));
      return;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      const errMsg = 'E-mail inválido.';
      window.alert(errMsg);
      Sentry.captureException(new Error(errMsg));
      return;
    }
    // Validação dos campos do veículo
    if (!marca || !/^[A-Za-zÀ-ÿ\s]+$/.test(marca)) {
      const errMsg = 'Marca inválida. Use apenas letras.';
      window.alert(errMsg);
      Sentry.captureException(new Error(errMsg));
      return;
    }
    if (!modelo) {
      const errMsg = 'Modelo do veículo é obrigatório.';
      window.alert(errMsg);
      Sentry.captureException(new Error(errMsg));
      return;
    }
    if (!cor || !/^[A-Za-zÀ-ÿ\s]+$/.test(cor)) {
      const errMsg = 'Cor inválida. Use apenas letras.';
      window.alert(errMsg);
      Sentry.captureException(new Error(errMsg));
      return;
    }
    if (!combustivel) {
      const errMsg = 'Combustível é obrigatório.';
      window.alert(errMsg);
      Sentry.captureException(new Error(errMsg));
      return;
    }
    if (!assentos || isNaN(Number(assentos)) || Number(assentos) < 1) {
      const errMsg = 'Assentos deve ser um número maior que zero.';
      window.alert(errMsg);
      Sentry.captureException(new Error(errMsg));
      return;
    }
    setModoEdicao(false)
    alert('Perfil atualizado com sucesso!')
  }

  return (
    <div className="min-h-screen flex flex-col items-center space-y-10 bg-[#DAF3D7] bg-cover bg-center p-4">

      {/* Perfil */}
      <div className="bg-white w-full md:w-[55%] mb-1 flex flex-col md:flex-row items-center rounded-2xl mt-10 p-4 md:justify-between">
        <img
          src="https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2023/03/Ativo-2.png"
          className="w-32 h-32 rounded-full object-cover"
          alt="Foto do motorista"
        />
        <div className="flex flex-col text-[#004d2b] items-center md:items-start mt-4 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold">{nome}</h1>
          <h2 className="text-xl md:text-2xl text-black">Motorista</h2>
        </div>
      </div>

      {/* Informações da Conta */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-[55%] mb-5 ">
        <h1 className="text-2xl md:text-3xl border-2 p-3 text-[#004d2b] font-bold text-center rounded-2xl">Informações da Conta</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {[ 
            { label: "Nome", value: nome, setValue: setNome, icon: faUser, type: "text" },
            { label: "Telefone", value: telefone, setValue: setTelefone, icon: faPhone, type: "text" },
            { label: "E-mail", value: email, setValue: setEmail, icon: faEnvelope, type: "email" },
            { label: "CNH", value: cnh, setValue: setCnh, icon: faIdCard, type: "text" },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FontAwesomeIcon icon={item.icon} className="text-green-800" />
              {modoEdicao ? (
                <div className="w-full">
                  <h2 className="text-sm font-bold text-gray-700 mb-2">{item.label}</h2>
                  <input
                    type={item.type}
                    value={item.value}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (item.label === "Telefone") {
                        value = value.replace(/\D/g, "");
                        value = value.replace(/^(\d{2})(\d)/, "($1) $2");
                        value = value.replace(/(\d{5})(\d)/, "$1-$2");
                        item.setValue(value.slice(0, 15));
                      } else if (item.label === "CNH") {
                        value = value.replace(/\D/g, "");
                        item.setValue(value.slice(0, 11));
                      } else if (
                        ["Nome", "Marca", "Cor"].includes(item.label) &&
                        value !== "" &&
                        /[^A-Za-zÀ-ÿ\s]/.test(value)
                      ) {
                        return; // Não atualiza se contiver caracteres inválidos
                      } else {
                        item.setValue(value);
                      }
                    }}
                    className="border w-full p-2 rounded bg-gray-100"
                  />
                </div>
              ) : (
                <div className="w-full">
                  <h2 className="text-sm font-bold text-gray-700 mb-2">{item.label}</h2>
                  <span className="text-gray-700">{item.value}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {modoEdicao ? (
          <button onClick={salvarEdicao} className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold p-2 w-full mt-4 mb-4 ">Salvar</button>
        ) : (
          <button onClick={() => setModoEdicao(true)} className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold p-2 w-full mt-4 mb-4 ">Editar Perfil</button>
        )}
      </div>

      {/* Informações do Veículo */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-[55%] mb-5">
        <h1 className="text-xl md:text-2xl text-green-800 font-bold rounded border-2 p-3 mb-5">Veículo</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[ 
            { label: "Marca", value: marca, setValue: setMarca, icon: faCarSide },
            { label: "Modelo", value: modelo, setValue: setModelo, icon: faCar },
            { label: "Placa", value: placa, setValue: setPlaca, icon: faIdBadge },
            { label: "Cor", value: cor, setValue: setCor, icon: faPalette },
            { label: "Combustível", value: combustivel, setValue: setCombustivel, icon: faGasPump },
            { label: "Assentos", value: String(assentos), setValue: (v: string) => setAssentos(Number(v)), icon: faChair },
            { label: "Ar Condicionado", value: arCondicionado ? "Sim" : "Não", setValue: (v: string) => setArCondicionado(v === "Sim"), icon: faCar }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FontAwesomeIcon icon={item.icon} className="text-green-800" />
              {modoEdicao ? (
                <div className="w-full">
                  <h2 className="text-sm font-bold text-gray-700 mb-2">{item.label}</h2>
                  <input
                    type={item.label === "Assentos" ? "number" : "text"}
                    value={item.value}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (item.label === "Placa") {
                        value = value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 7);
                      }
                      item.setValue(value);
                    }}
                    className="border w-full p-2 rounded bg-gray-100"
                  />
                </div>
              ) : (
                <div className="w-full">
                  <h2 className="text-sm font-bold text-gray-700 mb-2">{item.label}</h2>
                  <span className="text-gray-700">{item.value}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Corridas Online */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-[55%] mb-5 ">
        <h1 className="text-xl md:text-2xl text-green-800 font-bold rounded border-2 p-3 mb-5">Corridas Online</h1>
        <div className="flex space-x-4 justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-2xl">Ligar</button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-2xl">Desligar</button>
        </div>
      </div>

      {/* Últimas Corridas */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-[55%] mb-5">
        <h1 className="text-xl md:text-2xl text-green-800 font-bold rounded border-2 p-3 mb-5">Últimas Corridas</h1>

        <div className="flex flex-col space-y-4">
          {corridas.map((corrida, index) => (
            <div key={index} className="flex flex-col space-y-2 border-2 border-gray-300 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">{corrida.passageiro}</h3>
                  <p>{corrida.localViagem} → {corrida.destino}</p>
                </div>
                <div>
                  <p className="font-bold">{corrida.valor}</p>
                  <p>{corrida.data}</p>
                </div>
              </div>

              <div className="mt-2 text-sm text-black">
                <p className='mt-2'>
                  <FontAwesomeIcon icon={faClock} className="mr-2 text-green-800" />
                  <strong>Duração:</strong> {corrida.duracao}
                </p>
                <p className='mt-2'>
                  <FontAwesomeIcon icon={faRulerCombined} className="mr-2 text-green-800" />
                  <strong>Distância:</strong> {corrida.distancia}
                </p>
                <p className='mt-2'>
                  <FontAwesomeIcon icon={faCreditCard} className="mr-2 text-green-800" />
                  <strong>Pagamento:</strong> {corrida.pagamento}
                </p>
                <p className='mt-2'>
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-800" />
                  <strong>Status:</strong> {corrida.status}
                </p>
                <p className='mt-2'>
                  <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-500" />
                  <strong>Classificação:</strong> {corrida.classificacao}
                </p>
                <p className='mt-2'>
                  <FontAwesomeIcon icon={faCommentDots} className="mr-2 text-green-800" />
                  <strong>Comentários:</strong> {corrida.comentarios}
                </p>
              </div>

              <button onClick={denunciarCorrida} className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-xl self-end">
                Denunciar Corrida
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
