import './infoHeaderStyle.css'

import { BtnBlack } from "../btn_black/BtnBlack"
import { Back } from "../back/Back"


export const InfoHeader = () =>{
    return(
        <section className="info__header">
            <div className="container">
                <ul className="info__list">
                    <Back />
                    <h1 className="info__title">
                        BO Ukraine Alive
                    </h1>
                    <BtnBlack text={"Зробити донат"}/>
                </ul>
                <hr className="info-page__line"/>
            </div>
        </section>
    )
}