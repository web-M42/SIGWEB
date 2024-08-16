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
                    <div><a href="/" className="home_link">Conheça a GIP</a></div>
                    <div><a href="/Mapas" className="home_link">Mapas e dados</a></div>
                    <div><a href="/Comunicacao" className="home_link">Comunicação</a></div>
                    <div><a href="/FaleConosco" className="home_link">Fale conosco</a></div>
                </div>
                <div className='home_header_btn'>
                    <a href="#" className="home_btn_link">Comece a explorar</a>
                </div>
            </div>
        </>
    )
}

export default Home_header
