import './index.css'
import Images from '../../constants/images'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div>
                    <img src={Images.logo_gip_branco} alt='' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien.</p>
                </div>
                <div>
                    <h6>Fale conosco</h6>
                    <p>Mauris venenatis, felis scelerisque aliquet lacinia.</p>
                    <a href="tel:061999999999">(061) 99999-9999</a> <br/>
                    <a href="mailto:teste@teste.com">teste@teste.com</a>
                </div>
                <div>
                    <h6>Nossas redes</h6>
                    <i className='fa fa-instagram' />
                    <i className='fa fa-whatsapp' />
                </div>
            </div>
        </>
    )
}

export default Footer
