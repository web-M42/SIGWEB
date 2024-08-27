import { useState, useEffect } from 'react';

import Bloco_noticia from '../../_layout/bloco_noticia'
import Home_header from '../../_layout/home_header'
import Home_hero from '../../_layout/home_hero'
import Selecao_area from '../../_layout/selecao_area';

import Images from '../../constants/images';
import Footer from '../../_layout/footer';

function Home() {

  const [noticia, setNoticia] = useState([
    {
      titulo : 'Conheça a GIP',
      texto  : '<p>A GIP visa promover a gestão integrada da paisagem na Amazônia, incentivando a recuperação da vegetação nativa, o desenvolvimento de sistemas produtivos sustentáveis, o fortalecimento das cadeias produtivas e a implementação de arranjos inovadores de gestão entre Unidades de Conservação (UCs). </p> <p>As atividades propostas buscam reduzir o desmatamento, fomentar a recuperação florestal e adotar práticas sustentáveis que aumentem a renda das comunidades locais e melhorem a conectividade dos ecossistemas, focando em locais prioritários nos estados do Amazonas, Pará, Rondônia e Acre.</p>',
      image  : Images.mapa1
    }
    ,{
      titulo : 'Desenvolvimento de sistemas de produção sustentáveis',
      texto  : '<p>O desenvolvimento de sistemas produtivos sustentáveis exige melhorias técnicas e de planejamento, com a aplicação de técnicas mais sustentáveis alinhadas a uma abordagem de planejamento integrativo. Essas práticas de gestão são recomendadas para a agricultura, abrangendo pequenos, médios e grandes agricultores que estejam dispostos a adotar e desenvolver modelos de produção de baixo impacto ambiental. Além disso, tais práticas são também relevantes para comunidades extrativistas, incentivando a adoção de boas práticas de manejo.</p> <p>Entre as atividades planejadas para apoio nessa área estão: (i) treinamento de produtores, extrativistas e agentes de extensão em boas práticas de colheita, extração e processamento de produtos; (ii) realização de inventários florestais e elaboração de planos de manejo florestal em pequena escala para produtos florestais; (iii) treinamento de agricultores e técnicos em práticas agrícolas sustentáveis; (iv) promoção de abordagens de planejamento rural integrado para a produção agrícola; (v) capacitação em liderança e fortalecimento institucional cooperativo; e (vi) implementação de unidades de demonstração de práticas sustentáveis.</p>',
      link   : 'noticia/2',
      image  : Images.bacia1
    }
    ,{
      titulo : 'Rodada de articulação no âmbito local',
      texto  : '<p>Reunião na Universidade Federal de Uberlândia (UFU), Campus Pontal, em Ituiutaba - MG. (04/09/23) Reunido na Secretaria Municipal de Meio Ambiente e da Causa Animal da Prereitura Municipal de Ituiutaba (04/09/23) - No município de Ituiutaba, a Lei Municipal n° 4.597, de 18 de setembro de 2018, institulu o programa que tem como intuito a revitalização da Bacia do Ribeirao Sao Lourenço, com vistas amelhoria da quantidade e qualidade de água do manancial, que é a principal fonte de captação de água para abastecimento público do município.</p>',
      link   : 'noticia/3',
      image  : Images.rodada
    }
    ,{
      titulo : 'Oficina para Discussão da Estratégia de Implementação da GIP',
      texto  : '<p>No dia 11 de setembro de 2023, data nacional dedicada ao Cerrado foi realizada a "Oficina para Discussão da Estratégia de Implementação da GIP", que contou com a participação de 45 pessoas, com o objetivo de relatar o processo e apresentar os resultados do evento protagonizado por representantes das instituições parceiras do Projeto Gestão Integrada da Paisagem no Bioma Cerrado - Projeto Paisagens Rurais (FIP/Paisagem) e especialistas e técnicos de projetos e instituições de pesquisa afins, além de gestores públicos no âmbito Federal.</p>',
      link   : 'noticia/4',
      image  : Images.oficina
    }
  ]);

  

  useEffect(() => {
    setNoticia([...noticia,{titulo : '', texto  : '', link   : '', image  : ''}])

    console.log(noticia)
  }, []);

  return (
    <div className="main" style={{ /*width:'90%', marginLeft:'5%'*/ }}>
      <Home_header/>
      <Home_hero
        page='home'
        title='EXPLORE A REGIÃO'
        desk='Explore os dados da GIP em um mapa interativo e georreferenciado <br/> para uma experiência única e informativa!'
        link='#'
        textLink='Navegar'
      />
      <Bloco_noticia
        link={noticia[0].link     || undefined }
        texto={noticia[0].texto   || undefined}
        titulo={noticia[0].titulo || undefined}
        image={noticia[0].image   || undefined}
        direction='left'
      />

      <Selecao_area />
      
      <Bloco_noticia
        link={noticia[1].link     || undefined }
        texto={noticia[1].texto   || undefined}
        titulo={noticia[1].titulo || undefined}
        image={noticia[1].image   || undefined}
        direction='left'
      />

      <Bloco_noticia
        link={noticia[2].link     || undefined }
        texto={noticia[2].texto   || undefined}
        titulo={noticia[2].titulo || undefined}
        image={noticia[2].image   || undefined}
        direction='right'
      />
      <Bloco_noticia
        link={noticia[3].link     || undefined }
        texto={noticia[3].texto   || undefined}
        titulo={noticia[3].titulo || undefined}
        image={noticia[3].image   || undefined}
        direction='left'
      />

      <img src={Images.barra_logo} style={{ width:'80%', marginLeft:'10%' }} />

      <Footer />

    </div>
  )
}

export default Home
