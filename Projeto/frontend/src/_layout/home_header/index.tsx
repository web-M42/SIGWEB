import './index.css'
import Images from '../../constants/images'
//import { Link } from "react-router-dom"

function Home_header() {
    return (
        <>
            <div className='home_header'>
                <div style={{ width:'25%' }}>
                    <img src={ Images.GIPLOGO } />
                </div>
                <div className='home_header_links'>
                    <a href="/" className="home_link">Conheça a GIP</a>
                    {/* <a href="/Mapas" className="home_link">Mapas e dados</a> */}
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <a href="">Mapas e dados</a>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/Mapas">Mapas</a></li>
                            <li><a className="dropdown-item" href="/Dados">Dados</a></li>
                        </ul>
                    </div>
                    <a href="/Comunicacao" className="home_link">Comunicação</a>
                    <a href="/FaleConosco" className="home_link">Fale conosco</a>
                </div>
                <div className='home_header_btn'>
                    <a href="/entrar" className="home_btn_link">Comece a explorar</a>
                </div>
            </div>
        </>
    )
}

export default Home_header
