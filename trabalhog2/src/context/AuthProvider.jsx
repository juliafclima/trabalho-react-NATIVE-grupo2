import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pessoas, setPessoas] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('https://6542dfe001b5e279de1fabce.mockapi.io/login')
      .then((response) => {
        setPessoas(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar pessoas:', error);
      });
  }, []);

  const signin = (email, senha) => {
    
    const pessoaEncontrada = pessoas.find(login => login.email === email && login.senha === senha);
    
    if (pessoaEncontrada) {
        console.log('Usuário logado');
        setUser({ user: pessoaEncontrada.nome });
      } else {
      console.log('Usuário não encontrado');
      alert("Senha inválida!");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


