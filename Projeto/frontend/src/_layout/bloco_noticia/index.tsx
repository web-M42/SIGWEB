import './index.css'

import ReactHtmlParser from 'react-html-parser';


function Bloco_noticia(props: {
    link      : string | undefined
    texto     : string | undefined ,
    titulo    : string | undefined ,
    image     : string | undefined ,
    direction : string | undefined 
}) {
    return (
        <>
            {props.direction == 'left' ? (<>
                <div className='bloco_noticia'>
                { props.image != undefined ? (
                    <>
                        {/* <div> <img src={ props.image } /> </div> */}
                        <div className='noticia_imagem'> <img src={ props.image } /> </div>
                    </>
                ) : null }
                <div className='bloco_noticia_conteudo margin-left'>
                    { props.titulo != undefined ? ( <div className='bloco_noticia_titulo'>{ props.titulo }</div> ) : null }
                    { props.texto != undefined ? ( <div className='bloco_noticia_texto'>{ ReactHtmlParser(props.texto) }</div> ) : null }
                    { props.link != undefined ? ( <div className="noticia_btn_link"><a href={props.link} >Leia mais</a></div> ) : null }
                </div>
            </div>
            </>) : (<>
                <div className='bloco_noticia'>
                    <div className='bloco_noticia_conteudo margin-right'>
                        { props.titulo != undefined ? ( <div className='bloco_noticia_titulo'>{ props.titulo }</div> ) : null }
                        { props.texto != undefined ? ( <div className='bloco_noticia_texto'>{ ReactHtmlParser(props.texto) }</div> ) : null }
                        { props.link != undefined ? ( <div className="noticia_btn_link"><a href={props.link} >Leia mais</a></div> ) : null }
                    </div>
                    { props.image != undefined ? (
                        <>
                            {/* <div> <img src={ props.image } /> </div> */}
                            <div className='noticia_imagem'> <img src={ props.image } /> </div>
                        </>
                    ) : null }
                </div>
            </>)}
            
            
            
        </>
    )
}

export default Bloco_noticia
