import Button from '@restart/ui/esm/Button';
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import logo from '../components/LogoBNI.png';

const log = {
  email: 'admin',
  senha: 'asd',
};

const log2 = {
  email: 'pedro',
  senha: 'asd',
};

const log3 = {
  email: 'julio',
  senha: 'asd',
};

function login(email: string, senha: string) {
  if (email == log.email && senha == log.senha) {
    localStorage.setItem('user', email);
    window.location.href = '/quadros';
  } else if (email == log2.email && senha == log2.senha) {
    localStorage.setItem('user', email);
    window.location.href = '/quadros';
  } else if (email == log3.email && senha == log3.senha) {
    localStorage.setItem('user', email);
    window.location.href = '/quadros';
  } else {
    alert('Dados inválidos');
  }
}

export default function LoginPage() {
  var [email, setEmail] = useState('');
  var [senha, setSenha] = useState('');

  useEffect(() => {
    localStorage.removeItem('user');
  }, []);

  return (
    <section className="vh-100 loginPage">
      <div className="container py-5 h-100 align-items-center justify-content-center">
        <div className="row d-flex justify-content-center align-items-center h-1">
          <img src={logo} style={{ maxWidth: '24rem' }} />
        </div>

        <div className="row d-flex justify-content-center align-items-center h-70">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: '1rem' }}
            >
              <div className="card-body p-5 ">
                <h3 className="mb-5 text-center">Login</h3>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typeEmailX">
                    Email
                  </label>
                  <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    id="typeEmailX"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typePasswordX">
                    Senha
                  </label>
                  <input
                    onChange={(event) => setSenha(event.target.value)}
                    type="password"
                    id="typePasswordX"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="text-center">
                  <Button
                    onClick={() => login(email, senha)}
                    className="btn btn-danger btn-lg btn-block"
                    type="submit"
                  >
                    Entrar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
