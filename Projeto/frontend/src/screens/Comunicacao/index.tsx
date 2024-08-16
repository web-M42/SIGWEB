import { useEffect } from 'react';

import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';

import './index.css';

import Home_header from '../../_layout/home_header'
import Home_hero from '../../_layout/home_hero'
import Footer from '../../_layout/footer';

function Comunicacao() {

  useEffect(() => {
    
  }, []);

  return (
    <div className="main" style={{ /*width:'90%', marginLeft:'5%'*/ }}>
      <Home_header />

      <Home_hero
        page='comunicacao'
        title='Comunicação'
        desk='Nessa sessão você encontra as últimas notícias da GIP'
        link=''
        textLink=''
      />
      
      <h5 className='title_redes'>Acesse nossas redes</h5>
      <div className='section_redes'>
        <div>
          <a href="#">
            <IonIcon name="logo-instagram" className='icon_sec_icon' />
            <p>Instagram</p>
          </a>
        </div>
        <div>
          <a href="#">
            <IonIcon name="logo-twitter" className='icon_sec_icon' />
            <p>Twitter</p>
          </a>
        </div>
        <div>
          <a href="#">
            <IonIcon name="logo-linkedin" className='icon_sec_icon' />
            <p>linkedin</p>
          </a>
        </div>
        <div>
          <a href="#">
            <IonIcon name="logo-whatsapp" className='icon_sec_icon' />
            <p>Whatsapp</p>
          </a>
        </div>
      </div>

      <h5 className='title_redes'>A GIP nas mídias</h5>
      <div className="gip_midias">
        <div className='Box_noticia'>
          <div className='Desk_noticia'>
            <h5>Noticia</h5>
            <div className='Desk_noticia_body'>
              <p>descrição</p>
              <Link to="/noticia/001"><IonIcon name="arrow-forward-outline" className='icon_sec_icon' /></Link>
            </div>
          </div>
        </div>
        <div className='Box_noticia'>
          <div className='Desk_noticia'>
            <h5>Noticia</h5>
            <div className='Desk_noticia_body'>
              <p>descrição</p>
              <Link to="/noticia/002"><IonIcon name="arrow-forward-outline" className='icon_sec_icon' /></Link>
            </div>
          </div>
        </div>
        <div className='Box_noticia'>
          <div className='Desk_noticia'>
            <h5>Noticia</h5>
            <div className='Desk_noticia_body'>
              <p>descrição</p>
              <Link to="/noticia/003"><IonIcon name="arrow-forward-outline" className='icon_sec_icon' /></Link>
            </div>
          </div>
        </div>
        <div className='Box_noticia'>
          <div className='Desk_noticia'>
            <h5>Noticia</h5>
            <div className='Desk_noticia_body'>
              <p>descrição</p>
              <Link to="/noticia/004"><IonIcon name="arrow-forward-outline" className='icon_sec_icon' /></Link>
            </div>
          </div>
        </div>
        <div className='Box_noticia'>
          <div className='Desk_noticia'>
            <h5>Noticia</h5>
            <div className='Desk_noticia_body'>
              <p>descrição</p>
              <Link to="/noticia/005"><IonIcon name="arrow-forward-outline" className='icon_sec_icon' /></Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Comunicacao
