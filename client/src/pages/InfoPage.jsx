import { Back } from "../components/back/Back"
import { Footer } from "../components/footer/Footer"
import { Menu } from "../components/menu/menu"
import { BtnBlack } from "../components/btn_black/BtnBlack"

import '../style/pages/infoPageStyle.css'
import { Info } from "../components/info/Info"

export const InfoPage = () =>{
    return(
        <>
            <div className="infoPage">
                <div className="container">
                    <Menu/>
                </div>
            </div>
            <section className="info__header">
                <div className="container">
                    <ul className="info__list">
                        <Back />
                        <h1 className="info__title">
                            BO Ukraine Alive
                        </h1>
                        <BtnBlack text={"Зробити донат"}/>
                    </ul>
                </div>
            </section>
            <Info />
            <Footer />
        </>
    )
}