import React, { useState } from 'react';

function App() {
  const [numeros, setNumeros] = useState({ numeroJogador: 0, numeroComputador: 0 });
  const [resultado, setResultado] = useState(0);
  const [opcao, setOpcao] = useState(0);
  const [jogoIniciado, setJogoIniciado] = useState(false);

  const gerarNumeroComputador = () => {
    const numero = Math.floor((Math.random() * 10) + 1);
    setNumeros((information) => ({ ...information, numeroComputador: numero }));
  };

  const pegarNumeroJogador = (event: any) => {
    const numero = event.target.value;
    setNumeros((information) => ({ ...information, numeroJogador: numero }));
  }

  const pegarOpcaoJogador = (event: any) => {
    const opcao = event.target.value;
    setOpcao(opcao);
  }

  const gerarPartida = () => {
    gerarNumeroComputador();
    const numeroComputador = numeros.numeroComputador;
    const numeroUsuario = numeros.numeroJogador;
    const opcaoUsuario = opcao;

    if(opcaoUsuario == 0){
      if((numeroComputador+numeroUsuario)%2==0){
        setResultado(0);
      }else{
        setResultado(1);
      }
    }else{
      if((numeroComputador+numeroUsuario)%2!=0){
        setResultado(0);
      }else{
        setResultado(1);
      }
    }

    setJogoIniciado(true)
  }

  return (
    <div>

      <h1>Par ou Impar</h1>
      <input 
        placeholder='Numero do jogador'
        type='number'
        onChange={pegarNumeroJogador}
      />
      <input 
        placeholder='0 - Par / 1 - Impar'
        type='number'
        onChange={pegarOpcaoJogador}
      />
      <button onClick={gerarPartida}>Jogar</button>

      {jogoIniciado && <h1>{resultado === 0 ? "Usuário" : "Computador"}</h1>}

    </div>
  );
}

export default App;
