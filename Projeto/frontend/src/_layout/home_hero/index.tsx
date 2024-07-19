import './index.css'
import logo_gip_branco from '../../assets/img/gip_logo_branco.png'
import logo_sfb_branco from '../../assets/img/logo_sfb.png'

function Home_hero() {
    return (
        <>
            <div className='home_hero'>
                <div className='home_hero_logos'>
                    <img src={logo_gip_branco} />
                    <img src={logo_sfb_branco} />
                </div>
                <div className='home_hero_titulo'>
                    <h1>EXPLORE A REGIÃO</h1>
                    <p>Explore os dados da GIP em um mapa interativo e georreferenciado <br/> para uma experiência única e informativa!</p>
                    <a href='#' className='home_hero_btn'>Navegar</a>
                </div>
            </div>
        </>
    )
}

export default Home_hero
