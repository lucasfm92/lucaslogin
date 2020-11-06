import React from 'react';

const login = (props) => {

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSingup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
    } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Usuário</label>
        <input
        type="text"
        autoFocus
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Senha</label>
        <input 
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
            <button onClick={handleLogin}>Entrar</button>
            <p>
              Não tem uma conta ?
            <span onClick={() => setHasAccount(!hasAccount)}>Cadastrar</span>
            </p>
            </>
          ) : (
            <>
            <button onClick={handleSingup}>Cadastrar</button>
            <p>
              Já tem uma conta ?
            <span onClick={() => setHasAccount(!hasAccount)}>Entrar</span>
            </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default login;