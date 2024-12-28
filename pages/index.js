import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
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

  const linkStyle = {
    margin: '10px 0',
    fontSize: '18px',
    textDecoration: 'none',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '10px 20px',
    borderRadius: '5px',
  };

  return (
    <>
      <Head>
        <title>Home - Crônicas de Ghanor</title>
      </Head>
      <div style={backgroundStyle}>
        <h1>Bem-vindo às Crônicas de Ghanor</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link legacyBehavior href="/gerador">
              <a style={linkStyle}>Gerador de Personagens</a>
            </Link>
          </li>
          {/* Adicione novos links aqui */}
        </ul>
      </div>
    </>
  );
};

export default Home;
