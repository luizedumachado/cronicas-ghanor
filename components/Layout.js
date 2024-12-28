import React from 'react';

const Layout = ({ children }) => {
  const footerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  const mainStyle = {
    backgroundImage: "url('/background.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    margin: 0,
  };

  return (
    <>
      <main style={mainStyle}>{children}</main>
      <footer style={footerStyle}>
        <p>© 2024 Feito por Luiz Eduardo Machado de Machado</p>
      </footer>
    </>
  );
};

export default Layout;
