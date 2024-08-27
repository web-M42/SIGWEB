import { useState, useEffect } from 'react';

import Home_header from '../../_layout/home_header'
import Footer from '../../_layout/footer';

import './index.css';
import Images from '../../constants/images';

function Mapas() {

  const [user,setUser] = useState({ email : '', senha : '' })

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

        <h5>Entrar</h5>

        <div className="preInput">
          <span>E-mail</span>
          <input type="text" placeholder="Informe seu e-mail" onChange={(e) => { setUser({...user, email : e.target.value}) }} />
        </div>

        <div className="preInput">
          <span>Senha</span>
          <input type="password" placeholder="Informe sua senha" onChange={(e) => { setUser({...user, senha : e.target.value}) }} />
        </div>

        <button className="btnEntar" onClick={() => btnEntrar()}>Entrar</button>

        <br/>
        <br/>
        <a href=''> Esqueci a senha</a>
        <br/>
        <br/>

        <div style={{ display:'flex', flexDirection:'row', justifyContent:'center' }}>
          <strong>Não tem uma conta?</strong>
          <a href=''> Cadastre-se </a>
        </div>

        <br/>
        <br/>
      </div>

      
      <Footer />
    </div>
  )
}

export default Mapas
