import React, { useState } from 'react';
import Head from 'next/head';

// Utility functions to randomly generate attributes
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomFromArray = (array) => array[randomNumber(0, array.length - 1)];

const CHARACTER_RACES = ['Humano', 'Anão', 'Elfo', 'Gigante', 'Hobgoblin', 'Meio-Elfo', 'Aberrante'];
const CHARACTER_CLASSES = ['Bárbaro', 'Bardo', 'Bucaneiro', 'Caçador', 'Cavaleiro', 'Clérigo', 'Druida', 'Ladino', 'Mago', 'Nobre', 'Soldado'];
const MUTATIONS = [
  'Ascético (+1 Sabedoria, +3 PM)',
  'Couro Rochoso (+2 Defesa)',
  'Magia Bizarra (1 Magia Arcana de 1º círculo)',
  'Metamorfose (Disfarce Ilusório)',
  'Mordida (Arma natural, 1d6)',
  'Musculoso (+1 Força, +5 carga)',
  'Resistente (+1 Constituição, Resistência à Magia +2)',
  'Sentidos Aguçados (Visão no escuro, +2 Percepção)',
  'Veloz (+1 Destreza, +3m Deslocamento)',
  'Venenoso (+5 Resistência a Veneno, 1d12 de dano envenenado)'
];

const App = () => {
  const [character, setCharacter] = useState(null);

  const backgroundStyle = {
    //backgroundImage: "url('/background.jpg')",
    //backgroundSize: 'cover',
    //backgroundPosition: 'center',
    //backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Texto copiado para o clipboard!'))
      .catch((err) => console.error('Erro ao copiar texto:', err));
  };

  const generateCharacter = () => {
    const race = randomFromArray(CHARACTER_RACES);
    const charClass = randomFromArray(CHARACTER_CLASSES);
    const attributes = {
      Força: randomNumber(0, 4),
      Destreza: randomNumber(0, 4),
      Constituição: randomNumber(0, 4),
      Inteligência: randomNumber(0, 4),
      Sabedoria: randomNumber(0, 4),
      Carisma: randomNumber(0, 4),
    };
    const mutations = race === 'Aberrante' ? [
      randomFromArray(MUTATIONS),
      randomFromArray(MUTATIONS),
      randomFromArray(MUTATIONS),
      randomFromArray(MUTATIONS)
    ] : [];
  
    setCharacter({ race, class: charClass, attributes, mutations });
  };

  const copyCharacterToClipboard = () => {
    if (!character) {
      alert("Por favor, gere um personagem antes de copiar!");
      return;
    }
  
    const characterText = `Personagem Gerado:\nRaça: ${character.race}\nClasse: ${character.class}\nAtributos:\n${Object.entries(character.attributes).map(([key, value]) => `${key}: ${value}`).join('\n')}\nMutations:\n${character.mutations.join('\n')}`;
    copyToClipboard(characterText);
  };
  return (
    <>
      <Head>
        <title>Gerador de Personagens</title>
      </Head>
      <div style={backgroundStyle}>
        <h1>Gerador de Personagens Aleatórios</h1>
        <button onClick={generateCharacter} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>
          Gerar Personagem
        </button>

        {character && (
          <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <h2>Personagem Gerado</h2>
            <p><strong>Raça:</strong> {character.race}</p>
            <p><strong>Classe:</strong> {character.class}</p>
            <h3>Atributos</h3>
            <ul>
              {Object.entries(character.attributes).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
            {character.mutations.length > 0 && (
              <>
                <h3>Mutations</h3>
                <ul>
                  {character.mutations.map((mutation, index) => (
                    <li key={index}>{mutation}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          
        )
        }
      <button 
          onClick={copyCharacterToClipboard}
          style={{ 
            marginTop: '20px', 
            padding: '10px 20px', 
            fontSize: '16px', 
            color: 'white', 
            backgroundColor: 'rgba(0, 0, 0, 0.6)', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
          }}
        >
          Copiar Personagem Gerado
        </button>
        <button 
          onClick={() => window.location.href = '/'}
          style={{ 
            marginTop: '20px', 
            padding: '10px 20px', 
            fontSize: '16px', 
            color: 'white', 
            backgroundColor: 'rgba(0, 0, 0, 0.6)', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
          }}
        >
          Voltar
        </button>
        </div>
        </>
  );
};

export default App;
