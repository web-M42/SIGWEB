import { useState, useEffect } from 'react';

import Bloco_noticia from '../../_layout/bloco_noticia'
import Home_header from '../../_layout/home_header'
import Home_hero from '../../_layout/home_hero'
import Footer from '../../_layout/footer';

import './index.css';
import Images from '../../constants/images';

function Dados() {

  const [noticiaDirection, setNoticiaDirection] = useState('left')
  const [noticia, setNoticia] = useState([
    {
      titulo   : 'Nossa Tecnologia',
      texto    : '<p>Nossa infra estrutura permite que os dados possam ser acessados deforma web, de forma que todos os dispositivos que possuam um navegador, possam acessar e consumir os dados disponíveis.</p>',
      image    : Images.imgdefault,
      link     : undefined,
      direction: 'left'
    }
    ,{
      titulo   : 'Os Dados',
      texto    : '<p>Os dados foram coletados e catalogados para que possam ser visualizados, platados em um mapa. Dessa forma podemos visualizar diversos contextos e até mesmo combinar diversos tipos de dados.</p>',
      image    : Images.imgdefault,
      link     : undefined,
      direction: 'right'
    }

  ]);




  useEffect(() => {
    setNoticia([...noticia,{titulo : '', texto  : '', link   : undefined, image  : '', direction : ''}])
    {setNoticiaDirection( noticiaDirection == 'left' ? 'right' : 'left')}
  }, []);

  return (
    <div className="main" style={{ /*width:'90%', marginLeft:'5%'*/ }}>

      <Home_header/>

      <Home_hero
        page='Dados'
        title='Dados'
        desk='Explore os dados disponibilizados pela GIP, e navege em nosso mapa interativo'
        link='#'
        textLink='Acessar dados'
      />


      {noticia.map((e) => {  
        return (
            <Bloco_noticia
              link={undefined }
              texto={e.texto   || undefined}
              titulo={e.titulo || undefined}
              image={e.image   || undefined}
              direction={e.direction}
            />
        )
      })}

      <div className='section_regioes_disponiveis'>
        <h5>Regiões Disponíveis</h5>
        <div className='section_regioes_deails'>
          <div>
            <img src={Images.minas_icon} alt="" />
            <h6>Minas</h6>
            <p>A região de minas gerais foi escolhida como piloto para esse projeto de painel, onde foi selecionadas duas regiões em especificas. A Bacia do São Francisco e os arredores do Rio Paranaíba.</p>
          </div>
          <div>
            <img src={Images.bacia_sao_francisco_icon} alt="" />
            <h6>Bacia do São Francisco</h6>
            <p>A Bacia do são Francisco foi selecionada para esse projeto por conter um dos maiores açudes de água doce que se encontra dentro do estado de Minas Gerais.</p>
          </div>
          <div>
            <img src={Images.rio_parnaiba_icon} alt="" />
            <h6>Rio Paranaíba</h6>
            <p>O Rio Parnaiba, é um dos maiores Rios dentro do estado de Minas Gerais, ele movimenta um alto volume de água que abastece diversos imóveis ao redor dele.</p>
          </div>
        </div>
      </div>


      <div className='section_big_numbers'>
        <div>
          <h6>2,100+</h6>
          <strong>Imóveis monitorados</strong>
          <p>Os imóveis que receberam algum tipo de visita única ou constante, e que foram cadastrados em nossa base de dados passam a contar como um imóvel monitorado.</p>
        </div>
        <div>
          <h6>98%</h6>
          <strong>De precisão nos dados</strong>
          <p>Nossos técnicos são orientados e checar os dados antes de cadastra-los em nossa base, o que garante uma confiabilidade enorme nos dados.</p>
        </div>
        <div>
          <h6>5K+</h6>
          <strong>Acessos ao ano</strong>
          <p>O pertal da GIP possui mais de 5mil acessos no ano. Os usuário buscam por informações, downloads de mapas e dados sempre atualizados.</p>
        </div>
        <div>
          <h6>150+</h6>
          <strong>Regiões mapeadas</strong>
          <p>A GIP é responsável por mapear e acompanhar os imóveis em mais de 150 regiões em todo o Brasil.</p>
        </div>
      </div>


      <div className='section_video'>
        <div className='play_video'>
          
        </div>
        <div>
          <h6>Explore!</h6>
          <p>Assista o video de demonstração sobre como funciona a plataforma e como navegar entre as telas consultando os dados e navegando pelo mapa.</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Dados
