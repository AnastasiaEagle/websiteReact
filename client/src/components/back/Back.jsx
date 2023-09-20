import './backStyle.css'

export const Back = () =>{
    return(
        <div className="back">
            <a href="/" className="back__link">
                <img src="img/icons/gg_more.svg" alt="" />
                <p className="back-text">
                    Назад
                </p>
            </a>
        </div>
    )
}