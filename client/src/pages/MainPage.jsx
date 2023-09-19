import { BtnBlack } from "../components/btn_black/BtnBlack"
import { Card } from "../components/card/Card"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/header"
import { PopUpList } from "../components/pop-up_list/PopUpList"

import '../style/pages/mainPageStyle.css'

export const MainPage = () =>{
    return(
        <>
            <PopUpList />
            <Header/>
            <section className="help">
                <div className="container">
                    <ul className="flex">
                        <li className="help__text">
                            Мапа допомоги:
                        </li>
                        <li className="help__btn">
                            <BtnBlack text="Подати заявку на допомогу"/>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}