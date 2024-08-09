import './index.css'

import Images from '../../constants/images'

function Home_hero() {
    return (
        <>
            <div className='home_hero'>
                <div className='home_hero_logos'>
                    <img src={Images.logo_gip_branco} />
                    <img src={Images.logo_sfb_branco} />
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
