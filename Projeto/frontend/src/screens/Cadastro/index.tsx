import { useState, useEffect } from 'react';

import Home_header from '../../_layout/home_header'
import Footer from '../../_layout/footer';

import './index.css';
import Images from '../../constants/images';
import { Link } from 'react-router-dom';

function Cadastro() {

  const [user,setUser] = useState({ nome : '', email : '', senha : '', cidade : '', tipoParceiro : '', instituicao : '', estado : '', sexo : '' })

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

        <h5>Cadastre-se</h5>

        <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
          <div style={{ width:'48%', borderWidth:1, borderColor:'#000' }}>
            <div className="preInput2">
              <span>Nome</span>
              <input type="text" placeholder="Informe seu nome" onChange={(e) => { setUser({...user, nome : e.target.value}) }} />
            </div>
            <div className="preInput2">
              <span>Senha</span>
              <input type="password" placeholder="Informe sua senha" onChange={(e) => { setUser({...user, senha : e.target.value}) }} />
            </div>
            <div className="preInput2">
              <span>Cidade</span>
              <input type="text" placeholder="Informe sua cidade" onChange={(e) => { setUser({...user, cidade : e.target.value}) }} />
            </div>
            <div className="preInput2">
              <span>Tipo de parceiro</span>
              <select className='form-select' onChange={(e) => { setUser({...user, tipoParceiro : e.target.value}) }}>
                <option value="--">Selecione</option>
                <option value="U">Usuário</option>
                <option value="P">Proprietário</option>
                <option value="E">Empresário</option>
              </select>
            </div>
          </div>

          <div style={{ width:'48%', borderWidth:1, borderColor:'#000' }}>
            <div className="preInput2">
              <span>E-mail</span>
              <input type="text" placeholder="Informe seu e-mail" onChange={(e) => { setUser({...user, email : e.target.value}) }} />
            </div>
            <div className="preInput2">
              <span>Instituição</span>
              <input type="text" placeholder="Informe sua instituição" onChange={(e) => { setUser({...user, instituicao : e.target.value}) }} />
            </div>
            <div className="preInput2">
              <span>Estado</span>
              <select className='form-select' onChange={(e) => { setUser({...user, estado : e.target.value}) }}>
                <option value="--">Selecione</option>
                <option value="AC">AC - Acre</option>
                <option value="AL">AL - Alagoas</option>
                <option value="AP">AP - Amapá</option>
                <option value="AM">AM - Amazonas</option>
                <option value="BA">BA - Bahia</option>
                <option value="CE">CE - Ceará</option>
                <option value="ES">ES - Espírito Santo</option>
                <option value="GO">GO - Goiás</option>
                <option value="MA">MA - Maranhão</option>
                <option value="MT">MT - Mato Grosso</option>
                <option value="MS">MS - Mato Grosso do Sul</option>
                <option value="MG">MG - Minas Gerais</option>
                <option value="PA">PA - Pará</option>
                <option value="PB">PB - Paraíba</option>
                <option value="PR">PR - Paraná</option>
                <option value="PE">PE - Pernambuco</option>
                <option value="PI">PI - Piauí</option>
                <option value="RJ">RJ - Rio de Janeiro</option>
                <option value="RN">RN - Rio Grande do Norte</option>
                <option value="RS">RS - Rio Grande do Sul</option>
                <option value="RO">RO - Rondônia</option>
                <option value="RR">RR - Roraima</option>
                <option value="SC">SC - Santa Catarina</option>
                <option value="SP">SP - São Paulo</option>
                <option value="SE">SE - Sergipe</option>
                <option value="TO">TO - Tocantins</option>
                <option value="DF">DF - Distrito Federal</option>
              </select>
            </div>
            <div className="preInput2">
              <span>Sexo</span>
              <select className='form-select' onChange={(e) => { setUser({...user, sexo : e.target.value}) }}>
                <option value="--">Selecione</option>
                <option value="F">Feminino</option>
                <option value="M">Masculino</option>
                <option value="O">Outro</option>
              </select>
            </div>
          </div>
        </div>

        <button className="btnEntar" onClick={() => btnEntrar()}>Entrar</button>

        

        <div style={{ display:'flex', flexDirection:'row', justifyContent:'center', marginTop:30 }}>
          Já tenho uma conta
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

export default Cadastro
