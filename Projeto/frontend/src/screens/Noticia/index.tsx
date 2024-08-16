import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import IonIcon from '@reacticons/ionicons';
import './index.css';

import Images from '../../constants/images';
import Home_header from '../../_layout/home_header'
import Footer from '../../_layout/footer';

interface NoticiaType {
  id: number;
  title: string;
  Image: string;
  Desk: string;
}

function Noticia() {

  const { id } = useParams<{ id: string }>(); // UseParams deve tipar o tipo de parâmetro esperado
  const noticiaId = parseInt(id || "0", 10); // Convertendo para número inteiro com fallback para 0
  const [encontrou, setEncontrou] = useState<boolean>(false);
  const [noticiaEncontrada, setNoticiaEncontrada] = useState<NoticiaType | null>(null);
  const [noticia, setNoticia] = useState<NoticiaType[]>([
    {
      id: 1, 
      title: 'Unidade de Conservação Estadual: Refúgio da Vida Silvestre Estadual dos Rios Tijuco e da Prata',
      Image: Images.bacia1, // Presume-se que "Images.bacia1" seja um caminho para uma imagem
      Desk: '<p>A estratégia adotada para a definição de critérios para seleção da área de implementação da GIP considerou os seguintes critérios:</p><ul><li>Bacias hidrográficas de atuação do Projeto;</li><li>Maior concentração de imóveis rurais assistidos pelo Projeto;</li><li>Menor distanciamento entre imóveis;</li><li>Fragmentação da área, possibilidade de conectividade da paisagem;</li><li>Compatibilidade com propostas de intervenção em nível Federal, Estadual e Municipal;</li><li>Situação da governança dos municípios – maior abertura para atuação;</li><li>Parceiros potenciais – Iniciativa Privada, ONGs, Universidades, etc;</li><li>Condições favoráveis para implementação.</li></ul><p>Com base nos critérios mencionados anteriormente, foi selecionada a Bacia Hidrográfica 8692 do Triângulo Mineiro, formada pelos Rios Prata e Tijuco, apresentando a maior concentração de imóveis rurais assistidos pelo projeto, cerca de 2.722, envolvendo 91 técnicos de campo e 8 supervisores e mais de 48.000 visitas técnicas.</p><br/><p>A região apresenta grande potencial no que tange a integração de ações, possuindo articulação nas diferentes instâncias de gestão, podendo destacar o papel do Instituto Estadual de Florestas (IEF), das prefeituras, da Empresa de Assistência Técnica e Extensão Rural (Emater), Universidade e iniciativa privada. Outro ponto que colaborou para a escolha foi a experiência do projeto com as Unidades de Avaliação de Indicadores (UAIs), proposta de conectividade da paisagem pelo governo estadual, além de municípios que se destacam na região por ações visando sustentabilidade ambiental.</p>' 
    },
    {
      id: 2, 
      title: 'Outro Título',
      Image: 'Images.outro', // Outro exemplo de imagem
      Desk: 'Descrição para outra notícia.'
    },
  ]);

  useEffect(() => {
    const resultado = noticia.find((e) => e.id === noticiaId);

    if (resultado) {
      setNoticiaEncontrada(resultado);
      setEncontrou(true);
    } else {
      setEncontrou(false);
    }

    // Caso queira adicionar uma nova notícia para teste
    setNoticia((prevNoticia) => [
      ...prevNoticia,
      {
        id: 3, 
        title: 'Nova Notícia',
        Image: 'Images.novaNoticia', 
        Desk: 'Descrição da nova notícia.' 
      }
    ]);
  }, []);

  if (!encontrou) {
    return (
      <>
        <Home_header />
          <div style={{ width:'60%', marginLeft:'20%', marginBottom:60 }}>
            <Link to="/comunicacao" style={{ display:'flex', flexDirection:'row', alignItems:'center', textDecoration:'none' }}>
              <IonIcon name='arrow-back-sharp' style={{ fontSize:18, borderRadius:100, borderWidth:2, borderColor:'#008E5B', color:'#008E5B' }} />
              <h5 style={{color:'#008E5B', marginLeft:15}}>Voltar</h5>
            </Link>
            <h1 style={{ textAlign:'center', color:'#0D3F21', fontSize:38 }}>Notícia não encontrada!</h1>
          </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="main" style={{ /*width:'90%', marginLeft:'5%'*/ }}>
      <Home_header />
      
      <div style={{ width:'60%', marginLeft:'20%', marginBottom:60 }}>
      <Link to="/comunicacao" style={{ display:'flex', flexDirection:'row', alignItems:'center', textDecoration:'none' }}>
        <IonIcon name='arrow-back-sharp' style={{ fontSize:18, borderRadius:100, borderWidth:2, borderColor:'#008E5B', color:'#008E5B' }} />
        <h5 style={{color:'#008E5B', marginLeft:15}}>Voltar</h5>
      </Link>
        <h1 style={{ textAlign:'center', color:'#0D3F21', fontSize:38 }}>{noticiaEncontrada?.title}</h1>
        <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
          <img src={noticiaEncontrada?.Image} alt={noticiaEncontrada?.title} />
          <div style={{ padding:20 }} dangerouslySetInnerHTML={{ __html: noticiaEncontrada?.Desk }} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Noticia
