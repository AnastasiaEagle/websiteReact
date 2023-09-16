import './lineCardStyle.css'
export const LineCard = () =>{
    return(
        <div className="card__right_line">
            <div className="card__right_line-border">
                <div className="card__right_line-backgrond"></div>
            </div>
            <ul className="card__right_line-cost">
                <p className="card__right_text card__right_min">
                    0 UAH
                </p>
                <p className="card__right_text card__right_max">
                    21 356 UAH
                </p>
            </ul>
            <div className="card__right_line-cont">
                <div className="card__right_line-inf">
                    <p className="card__right_line-inf_text">
                        Вже зібрано
                    </p>
                    <p className="card__right_line-inf_sum">
                        20 267 UAH
                    </p>
                    <div className="arrow_down"></div>
                </div>
            </div>
        </div>
    )
}