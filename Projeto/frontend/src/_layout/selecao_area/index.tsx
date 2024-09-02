import './index.css'
import Images from '../../constants/images'

function Selecao_area() {
    return (
        <>
            <div className='selecao_area'>
                <h5>Critérios para seleção de área:</h5>
                <br/>
                <br/>
                <div className='icon_sarea'>
                    <div className="cardIcon">
                        <img src={Images.icon1} alt="" />
                        <p>Bacias hidrográficas de atuação do Projeto;</p>
                    </div>
                    <div className="cardIcon">
                        <img src={Images.icon2} alt="" />
                        <p>Maior concentração de imoveis rurais assistidos pelo Projeto;</p>
                    </div>
                    <div className="cardIcon">
                        <img src={Images.icon3} alt="" />
                        <p>Menor distanciamento entre imóveis;</p>
                    </div>
                    <div className="cardIcon">
                        <img src={Images.icon4} alt="" />
                        <p>Fragmentação da area, possibilidade de conectividade da paisagem;</p>
                    </div>
                    <div className="cardIcon">
                        <img src={Images.icon5} alt="" />
                        <p>Compatibilidade com propostas de intervenção em nível Federal, Estadual e Municipal;</p>
                    </div>
                    <div className="cardIcon">
                        <img src={Images.icon6} alt="" />
                        <p>Situação da governança dos municipios - maior abertura para atuacão;</p>
                    </div>
                    <div className="cardIcon">
                        <img src={Images.icon7} alt="" />
                        <p>Parceiros potenciais - Iniciativa Privada, ONGs, Universidades, etc;</p>
                    </div>
                    <div className="cardIcon">
                        <img src={Images.icon8} alt="" />
                        <p>Condições favoráveis para implementação.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Selecao_area
