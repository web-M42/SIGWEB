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
      texto  : '<p>A implementação da Gestão Integrada da Paisagem (GIP) foi iniciada a partir de junho de 2023 pelo SFB/MMA e GIZ no âmbito do projeto FIP Paisagens Rurais.</p> <p>A estratégia adotada inicialmente foi a definição de critérios para seleção da área de implementação da ação.</p>',
      image  : Images.mapa1
    }
    ,{
      titulo : 'A Bacia Hidrográfica 8692 do Triângulo Mineiro',
      texto  : '<p>Com base nos critérios mencionados anteriormente, foi selecionada a Bacia Hidrográfica 8692 do Triângulo Mineiro, formada pelos Rios Prata e Tijuco, apresentando a maior concentraçao de Imoveis rurais assistidos pelo projeto, cerca de 2./22, envolvendo 91 técnicos de campo e 8 supervisores e mais de 48.000 visitas técnicas.</p> <p>A região apresenta grande potencial no que tange a integração de ações, possuindo articulação nas diferentes instâncias de gestão, podendo destacar o papel do Instituto Estadual de Florestas (IEF), das prefeituras, da Empresa de Assistencig Tecnica e Extensão Rural (Emater. Universidade e iniciativa privada. </p> <p>Outro ponto que colaborou para a escolha foi a experiência do projeto com as Unidades de Avaliação de Indicadores (UAls), proposta de conectividade da paisagem pelo governo estadual, além de municípios que se destacam na região por ações visando sustentablldade ambienta.</p>',
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
