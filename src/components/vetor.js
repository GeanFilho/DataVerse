import React, { useState, useEffect } from 'react';
import './vetor.css';

const VectorAnimation = () => {
  const [xCoordinate, setXCoordinate] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Atualiza a coordenada X automaticamente
      setXCoordinate((prevX) => (prevX + 1) % 301); // Loop de 0 a 300
    }, 100); // Intervalo de atualização em milissegundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []); // O segundo argumento vazio garante que o useEffect é executado apenas uma vez

  return (
    <div className="vector-container">
      <div
        className="vector"
        style={{
          transform: `translate(${xCoordinate}px, 0)`,
        }}
      >
        {xCoordinate}
      </div>
    </div>
  );
};

class CaixaDeTextoInterativa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conteudo: '',
      pilhaResultados: [],
    };
  }

  render() {
    return (
      <div>
        <h1 className='titulo'>Estrutura de Vetores</h1>
        <div className="caixaDeTexto">
          <p>{this.state.conteudo}</p>
          <VectorAnimation />
          {/* Se desejar, você pode adicionar mais conteúdo aqui */}
        </div>
      </div>
    );
  }
}

export default CaixaDeTextoInterativa;
