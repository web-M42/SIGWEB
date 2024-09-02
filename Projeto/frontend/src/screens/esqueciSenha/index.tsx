import { useState, useEffect } from 'react';

import Home_header from '../../_layout/home_header'
import Footer from '../../_layout/footer';

import './index.css';
import Images from '../../constants/images';
import { Link } from 'react-router-dom';

function EsqueciSenha() {

  const [user,setUser] = useState({ email : '' })

  useEffect(() => {
  
    
  }, []);


  function btnEntrar(): void {
    console.log(user)
  }

  return (
    <div className="main" style={{ /*width:'90%', marginLeft:'5%'*/ }}>

      <Home_header/>

      <div className="mainLogin">
        <img src={Images.logo_sigweb} />

        <h5>Esqueci a senha</h5>

        <p>Informe seu e-mail para receber as instruções de como recuperar a sua conta.</p>

        <div className="preInput">
          <span>E-mail</span>
          <input type="text" placeholder="Informe seu e-mail" onChange={(e) => { setUser({...user, email : e.target.value}) }} />
        </div>

        <button className="btnEntar" onClick={() => btnEntrar()}>Enviar e-mail</button>

        <br/>
        <br/>

        <div style={{ display:'flex', flexDirection:'row', justifyContent:'center' }}>
          Já tem conta?
          &nbsp;
          &nbsp;
          <Link to='/entrar'> Entrar </Link>
        </div>

        <br/>
        <br/>
      </div>

      
      <Footer />
    </div>
  )
}

export default EsqueciSenha
