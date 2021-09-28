import React from 'react'
import logo from '../components/LogoBNI.png'

export default function LoginPage() {
  return (
    <section className="vh-100 loginPage">
      <div className="container py-5 h-100 align-items-center justify-content-center">

        <div className="row d-flex justify-content-center align-items-center h-1">
          <img src={logo} style={{ maxWidth: '24rem' }} />
        </div>

        <div className="row d-flex justify-content-center align-items-center h-70">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 ">
                <h3 className="mb-5 text-center">Login</h3>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typeEmailX">Email</label>
                  <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typePasswordX">Senha</label>
                  <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                </div>
                <div className="text-center">
                  <button className="btn btn-danger btn-lg btn-block" type="submit">Entrar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
