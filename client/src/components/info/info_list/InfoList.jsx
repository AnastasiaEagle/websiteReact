import { Checkbox } from "./checkbox/Checkbox"

import './infoListStyle.css'

export const InfoList = () => {
    return(
        <div className="info-list">
            <h2 className="info-list__title">
                Ціль:
            </h2>
            <p className="info-list__text">
                Терміново хлопцям потрібні:
            </p>
            <ul className="info-list__list">
                <li className="info-list__item">
                    <Checkbox text={"Кнопковий телефон з зарядками - 300 шт"} style={"active"} />
                </li>
                <li className="info-list__item">
                    <Checkbox text={"Намет УСТ-56 або ПБ-20- 15 шт"} />
                </li>
                <li className="info-list__item">
                    <Checkbox text={"Спреї, креми, спіралі від комарів - 100 шт"}/>
                </li>
                <li className="info-list__item">
                    <Checkbox text={"Маскувальні сітки -50 шт"}/>
                </li>
            </ul>
        </div>
    )
}