import { useEffect } from 'react';

import Home_header from '../../_layout/home_header'
import Home_hero from '../../_layout/home_hero'
import Footer from '../../_layout/footer';


function Mapas() {

  useEffect(() => {
    
  }, []);

  return (
    <div className="main" style={{ /*width:'90%', marginLeft:'5%'*/ }}>

      <Home_header/>
      <Home_hero />

      <h5>Mapas 123</h5>

      <Footer />
    </div>
  )
}

export default Mapas
