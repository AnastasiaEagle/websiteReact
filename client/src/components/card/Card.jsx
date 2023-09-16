import { DataCard } from "./data_card/DataCard"
import { ImageCard } from "./image_card/ImageCard"
import { InfCard } from "./inf_card/InfCard"
import { LineCard } from "./line_card/LineCard"
import { SocialCard } from "./social_card/SocialCard"

import './cardStyle.css'

export const Card = () => {
    return(
        <div className="card">
            <div className="card__left">
                <h2 className="card__left_title">
                   <b>BO Ukraine Alive</b>
                </h2>
                <div className="grid_card">
                    <ImageCard />
                    <div className="card__left_inf">
                        <SocialCard />
                        <DataCard />
                    </div>
                </div>
            </div>
            <div className="card__right">
                <h2 className="card__right_title">
                    <b>Допомогу для чудових хлопців на Схід України</b>
                </h2>
                <div className="grid_card">
                    <InfCard />
                    <LineCard />
                </div>
            </div>
            <div className="card__next">
                <a href="#" className="card__right_next-link">
                    Детальніше <img src="img/icons/arrow.svg" alt="irrow" /> 
                </a>
            </div>
        </div>
    )
}