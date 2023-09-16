import './socialCardStyle.css'

export const SocialCard = () =>{
    return(
        <div className="card__social">
            <p className="card__left_text">
                Поділитися:
            </p>
            <ul className="card__social_list">
                <li className="card__social_item">
                    <a href="#" className="social_item-link">
                        <img src="img/icons/instagram.svg" alt="instagram" className="social_item-img" />
                    </a>
                </li>
                <li className="card__social_item">
                    <a href="#" className="social_item-link">
                        <img src="img/icons/facebook.svg" alt="facebook" className="social_item-img" />
                    </a>
                </li>
                <li className="card__social_item">
                    <a href="#" className="social_item-link">
                        <img src="img/icons/twitter.svg" alt="twitter" className="social_item-img" />
                    </a>
                </li>
            </ul>
        </div>
    )
}