import { useEffect } from 'react';

import IonIcon from '@reacticons/ionicons';
import './index.css';

import Home_header from '../../_layout/home_header'
import Home_hero from '../../_layout/home_hero'
import Footer from '../../_layout/footer';

function FaleConosco() {

  useEffect(() => {
    
  }, []);

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
          <div className="inputbox"><span>Nome</span><input type="text" /></div>
          <div className="inputbox"><span>E-mail</span><input type="text" /></div>
          <div className="inputbox"><span>Assunto</span><input type="text" /></div>
          <div className="inputbox"><span>MEnsagem</span><textarea></textarea></div>
        </div>
        <div className="buttonFaleConosco">enviar</div>
      </div>


      <Footer />
    </div>
  )
}

export default FaleConosco
