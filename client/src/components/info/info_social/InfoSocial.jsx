import './infoSocialStyle.css'

export const InfoSocial = () =>{
    return(
        <div className="info-social">
            <ul className="info-social__list">
                <li className="info-social__item">
                    <button className="info-social__elem">
                        <img src="img/icons/instagram.svg" alt="" className="info-social__img" />
                        <p className="info-social__text">
                            Поділитися
                        </p>
                    </button>
                </li>
                <li className="info-social__item">
                    <button className="info-social__elem">
                        <img src="img/icons/facebook.svg" alt="" className="info-social__img" />
                        <p className="info-social__text">
                            Поділитися
                        </p>
                    </button>
                </li>
                <li className="info-social__item">
                    <button className="info-social__elem">
                        <img src="img/icons/twitter.svg" alt="" className="info-social__img" />
                        <p className="info-social__text">
                            Поділитися
                        </p>
                    </button>
                </li>
            </ul>
        </div>
    )
}