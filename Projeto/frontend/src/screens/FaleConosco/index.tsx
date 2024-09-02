import { useEffect, useState } from 'react';

import IonIcon from '@reacticons/ionicons';
import './index.css';

import Home_header from '../../_layout/home_header'
import Home_hero from '../../_layout/home_hero'
import Footer from '../../_layout/footer';

function FaleConosco() {

  const [msg,setMsg] = useState({ nome : '', email : '', assunto : '', msg : '' })

  useEffect(() => {
    
  }, []);

  function enviar(): void {
    console.log(msg)
  }

  return (
    <div className="main" style={{ /*width:'90%', marginLeft:'5%'*/ }}>
      <Home_header />
      
      <Home_hero
        page='comunicacao'
        title='Fale conosco e comece a explorar a região!'
        desk='Caso precise de alguma orientação ou informação mais especifica, entre em contato!'
        link=''
        textLink=''
      />

      <div className="links_contato">
        <div>
          <IonIcon name='location-outline' className='contato_icon' />
          <h6>Endereço</h6>
          <p>304 norte</p>
        </div>
        <div>
          <IonIcon name='mail-outline' className='contato_icon' />
          <h6>E-mail</h6>
          <p>304 norte</p>
        </div>
        <div>
          <IonIcon name='call-outline' className='contato_icon' />
          <h6>Endereço</h6>
          <p>304 norte</p>
        </div>
      </div>

      <div className="fale_conosco">
        <h5>Fale Conosco</h5>
        <div className="inputGroup">
          <div className="inputbox"><span>Nome</span><input placeholder='Escreva seu nome' type="text" onChange={(e) => { setMsg({...msg, nome : e.target.value}) }}/></div>
          <div className="inputbox"><span>E-mail</span><input placeholder='Escreva seu email' type="text" onChange={(e) => { setMsg({...msg, email : e.target.value}) }}/></div>
          <div className="inputbox"><span>Assunto</span><input placeholder='Escreva seu assunto' type="text" onChange={(e) => { setMsg({...msg, assunto : e.target.value}) }}/></div>
          <div className="inputbox"><span>Mensagem</span><textarea placeholder='Escreva sua mensagem' onChange={(e) => { setMsg({...msg, msg : e.target.value}) }}></textarea></div>
        </div>
        <div className="buttonFaleConosco" onClick={() => enviar()}>enviar</div>
      </div>


      <Footer />
    </div>
  )
}

export default FaleConosco
