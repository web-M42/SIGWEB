import './index.css'
import ReactHtmlParser from 'react-html-parser';

import Images from '../../constants/images'

function Home_hero(_props: { 
    page:     string; 
    title:    string; 
    desk:     string; 
    link:     string; 
    textLink: string;
}) {
    return (
        <>
            <div className={ _props.page == 'home' ? 'home_hero' : 'home_hero_interno' } >
                { _props.page == 'home' ? (
                    <div className='home_hero_logos'>
                        <img src={Images.logo_gip_branco} />
                        <img src={Images.logo_sfb_branco} />
                    </div>
                ) : null }
                <div className='home_hero_titulo'>
                    <h1>{_props.title}</h1>
                    <p>{ReactHtmlParser(_props.desk)}</p>
                    { _props.link != '' ? (
                        <a href={_props.link} className={ _props.page == 'home' ? 'home_hero_btn' : 'home_hero_btn_green' }>
                            {_props.textLink}
                        </a>
                    ) : null}
                    
                </div>
            </div>
        </>
    )
}

export default Home_hero
