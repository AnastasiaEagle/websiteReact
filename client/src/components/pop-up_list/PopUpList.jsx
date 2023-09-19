import { BtnBlack } from "../btn_black/BtnBlack"
import { Card } from "../card/Card"

import './popUpListStyle.css'
export const PopUpList = () =>{
    return(
        <div className="pop-up__window">
            <ul className="pop-up__window-list">
                <h1 className="pop-up__title">
                    Харківська область
                </h1>
                <BtnBlack text={"Подати заявку на допомогу"} />
            </ul>
            <div className="pop-up__scrollbe-container">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}