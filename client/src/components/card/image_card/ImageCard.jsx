import './imageCardStyle.css'

export const ImageCard = () =>{
    return(
        <div className="card__left_foto">
            <img className="card__img" src="img/foto_cart.png" alt="foto" />
            <img className="card__status" src="img/icons/good.svg" alt="status" />
        </div>
    )
}