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
                <li className="info-list__item">
                    <Checkbox text={"Павербанки макс. ємкості -50 шт"} style={"active"}/>
                </li>
                <li className="info-list__item">
                    <Checkbox text={"Скотч звичайний та армований -100 шт"} style={"active"}/>
                </li>
                <li className="info-list__item">
                    <Checkbox text={"Газовий паяльник, буд. плівка щільна -10 рулонів"} style={"active"}/>
                </li>
                <li className="info-list__item">
                    <Checkbox text={"Інвектор 12-220 вольт"} style={"active"}/>
                </li>
                <li className="info-list__item">
                    <Checkbox text={"Ізолента, кліпси wago 2-ка, 3-ка, 4-ка"} style={"active"}/>
                </li>
                <li className="info-list__item">
                    <Checkbox text={"Ліхтарики на батарейках, акумуляторах та батарейки"} style={"active"}/>
                </li>
                <li className="info-list__item">
                    <Checkbox text={"Прожектор на акумуляторі"} style={"active"}/>
                </li>
                <li className="info-list__item">
                    <Checkbox text={"Кірки, мішки, рукавички, цвяхи будівельні"} style={"active"}/>
                </li>
                <li className="info-list__item">
                    <Checkbox text={"Туалетний папір, баки для душу"} style={"active"}/>
                </li>
            </ul>
        </div>
    )
}