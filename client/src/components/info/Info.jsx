import { LineCard } from "../line_card/LineCard"
import { Slider } from "../slider/Slider"
import { InfoData } from "./info_data/InfoData"
import { InfoImage } from "./info_image/InfoImage"
import { InfoList } from "./info_list/InfoList"
import { Verification } from "./verification/Verification"
import { Website } from "./website/Website"
import { BtnBlack } from "../btn_black/BtnBlack"

import './infoStyle.css'
import { InfoSocial } from "./info_social/InfoSocial"

export const Info = () =>{
    return(
        <div className="container">
            <div className="info">
                <div className="info__card">
                    <InfoImage />
                    <div className="info__card_right">
                        <Verification />
                        <Website />
                        <InfoData />
                    </div>
                </div>
                <div className="info__right">
                    <InfoSocial />
                    <LineCard />
                </div>
                <InfoList />
                <Slider />
                <div className="donat">
                    <h1 className="donat__title">
                        Місце:
                    </h1>
                    <p className="donate__text">
                        Харківська область
                    </p>
                        <BtnBlack text={"Зорбити донат"}/>
                        <BtnBlack text={"Переглянути звіт"} style={"white"}/>
                </div>

            </div>
        </div>
    )
}