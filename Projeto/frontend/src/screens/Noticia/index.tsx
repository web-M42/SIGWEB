import { useEffect, useState } from 'react';

/* import IonIcon from '@reacticons/ionicons'; */
import './index.css';

import Home_header from '../../_layout/home_header'
import Footer from '../../_layout/footer';

function Noticia() {

  const [id, setId] = useState('')

  useEffect(() => {
    setId('id')
  }, []);

  return (
    <div className="main" style={{ /*width:'90%', marginLeft:'5%'*/ }}>
      <Home_header />
      
      {id}
      <Footer />
    </div>
  )
}

export default Noticia
