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
      texto  : '<p>A GIP é uma iniciativa de planejamento, execução e governança territorial entre grupos gestores e interessados de maneira integrada, inclusiva, colaborativa e estratégica; que promovam práticas produtivas sustentáveis, conservação e serviços ecossistêmicos.</p><p>A implementação da Gestão Integrada da Paisagem (GIP) foi iniciada a partir de junho de 2023 pelo SFB/MMA e GIZ no âmbito do Projeto FIP Paisagens Rurais. Os critérios para seleção da área de implementação foram:</p><p>•	Bacias hidrográficas de atuação do Projeto;</p><p>•	Maior concentração de imóveis rurais assistidos pelo Projeto;</p><p>•	Menor distanciamento entre imóveis;</p><p>•	Fragmentação da área, possibilidade de conectividade da paisagem;</p><p>•	Compatibilidade com propostas de intervenção em nível Federal, Estadual e Municipal;</p><p>•	Situação da governança dos municípios – maior abertura para atuação;</p><p>•	Parcerias potenciais atuando na região (Iniciativa Privada, ONGs, Universidades etc.);</p><p>Com base nos critérios foi selecionada a Bacia Hidrográfica 8692 do Triângulo Mineiro, formada pelos Rios Prata e Tijuco, apresentando a maior concentração de imóveis rurais assistidos pelo projeto, cerca de 2.722, envolvendo ações de ATeG (Assistência técnica e Gerencial) pelo Senar com 91 técnicos de campo, 8 supervisores e mais de 48.000 visitas técnicas. A região é objeto de múltiplas ações de diferentes atores, podendo destacar o papel do Governo do Estado de Minas Gerais, em especial atuação do Instituto Estadual de Florestas (IEF), das prefeituras, da Empresa de Assistência Técnica e Extensão Rural (Emater), Comitês de Bacias Hidrográficas, Universidades e iniciativa privada. Outro ponto que colaborou com a escolha foi a experiência do projeto no que tange às Unidades de Avaliação de Indicadores (UAIs), proposta de conectividade da paisagem pelo governo estadual, além de municípios que se destacam na região por ações visando sustentabilidade ambiental.</p>',
      image  : Images.mapa2
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
      

      <div style={{ width:'80%', marginLeft:'10%', padding:60, textAlign:'center' }}>

        <h2 style={{ color:'#0D3F21', fontSize: 40, fontWeight: 'bold' }}>Conheça a GIP</h2>

        <img src={ Images.mapa2 } alt="" style={{ width:'60%', margin:'60px 0px 60px 0px' }} />

        <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
          <div style={{ width:'48%', textAlign:'left' }}>
            <p>A GIP é uma iniciativa de planejamento, execução e governança territorial entre grupos gestores e interessados de maneira integrada, inclusiva, colaborativa e estratégica; que promovam práticas produtivas sustentáveis, conservação e serviços ecossistêmicos.</p>
            <p>Com base nos critérios foi selecionada a Bacia Hidrográfica 8692 do Triângulo Mineiro, formada pelos Rios Prata e Tijuco, apresentando a maior concentração de imóveis rurais assistidos pelo projeto, cerca de 2.722, envolvendo ações de ATeG (Assistência técnica e Gerencial) pelo Senar com 91 técnicos de campo, 8 supervisores e mais de 48.000 visitas técnicas. A região é objeto de múltiplas ações de diferentes atores, podendo destacar o papel do Governo do Estado de Minas Gerais, em especial atuação do Instituto Estadual de Florestas (IEF), das prefeituras, da Empresa de Assistência Técnica e Extensão Rural (Emater), Comitês de Bacias Hidrográficas, Universidades e iniciativa privada. Outro ponto que colaborou com a escolha foi a experiência do projeto no que tange às Unidades de Avaliação de Indicadores (UAIs), proposta de conectividade da paisagem pelo governo estadual, além de municípios que se destacam na região por ações visando sustentabilidade ambiental.</p>
          </div>
          <div style={{ width:'48%', textAlign:'left' }}>
            <p>A implementação da Gestão Integrada da Paisagem (GIP) foi iniciada a partir de junho de 2023 pelo SFB/MMA e GIZ no âmbito do Projeto FIP Paisagens Rurais. Os critérios para seleção da área de implementação foram:</p>
            <p>•	Bacias hidrográficas de atuação do Projeto;</p>
            <p>•	Maior concentração de imóveis rurais assistidos pelo Projeto;</p>
            <p>•	Menor distanciamento entre imóveis;</p>
            <p>•	Fragmentação da área, possibilidade de conectividade da paisagem;</p>
            <p>•	Compatibilidade com propostas de intervenção em nível Federal, Estadual e Municipal;</p>
            <p>•	Situação da governança dos municípios – maior abertura para atuação;</p>
            <p>•	Parcerias potenciais atuando na região (Iniciativa Privada, ONGs, Universidades etc.);</p>
          </div>  
        </div>

      </div>



      <div style={{ width:'80%', marginLeft:'10%', padding:60, display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
          <div style={{ width:'48%', textAlign:'left' }}>
            <img src={ Images.paisagem_rural } alt="" style={{ width:'100%' }} />
          </div>
          <div style={{ width:'48%', textAlign:'left' }}>
            <h2 style={{ color:'#0D3F21', fontSize: 40, fontWeight: 'bold' }}>Conheça a FIP</h2>
            <p>
              O Programa de Investimento Florestal (FIP) é parte do Plano de Investimentos do Brasil para redução do desmatamento e diminuição da pressão antrópica sobre o Cerrado, segundo maior bioma do País. O FIP é composto por oito projetos. Confira abaixo.<br/>
              É financiado pelo Fundo Estratégico do Clima, no âmbito dos Fundos de Investimentos para o Clima, um mecanismo fiduciário composto por 14 países desde 2009 e implementado, no Brasil, pelo Banco Mundial e o Banco Interamericano de Desenvolvimento.<br/>
              O FIP apoia países em desenvolvimento na redução da degradação florestal e na promoção do manejo sustentável das florestas, o que leva à redução e neutralização das emissões de carbono.<br/>
              O Plano de Investimentos do Brasil (PIB) é uma iniciativa do governo federal para o Programa de Investimento Florestal (FIP), destinada a apoiar a implementação de planos e programas nacionais que possuem como foco a redução do desmatamento e a diminuição da pressão pelo desflorestamento no Cerrado, segundo maior bioma do País.<br/>
              O FIP é financiado pelo Fundo Estratégico do Clima (SFC), um dos dois fundos no âmbito dos Fundos de Investimentos para o Clima (CIF) – mecanismo fiduciário composto por 14 países contribuintes, estabelecido em 2009 e implementado, no Brasil, por meio do Banco Mundial e do Banco Interamericano de Desenvolvimento (BID).<br/>
              O FIP apoia os países em desenvolvimento para redução do desmatamento e da degradação florestal e na promoção do manejo sustentável das florestas, que leva a reduções de emissões e ao aprimoramento dos estoques de carbono florestal.
            </p>

            <a href='https://www.gov.br/florestal/pt-br/assuntos/fomento-florestal/projetos-de-cooperacao/projeto-fip-paisagens-rurais/ifn' target='_blank'>Saiba mais</a>
          </div>  
      </div>


      {/* <Bloco_noticia
        link={noticia[0].link     || undefined }
        texto={noticia[0].texto   || undefined}
        titulo={noticia[0].titulo || undefined}
        image={noticia[0].image   || undefined}
        direction='left'
      /> */}

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
