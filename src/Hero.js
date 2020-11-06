import React from 'react';

const Hero = ({handleLogout}) => {
  return (
    <section className="hero">
      <nav>
        <h2>Bem Vindo!</h2>
        <button onClick={handleLogout}>Sair</button>
      </nav>
    </section>
  );
}

export default Hero