import { Menu } from "../menu/menu"
import { Search } from "../search/Search"

import './headerStyle.css'

export const Header = () =>{
    return(
        <header className="header">
            <div className="container">
                <Menu/>
                <div className="title">
                    <img src="img/icons/gerb.svg" alt="gerb" className="title_gerb" />
                    <h1 className="title__title">
                        ДОПОМОГА УКРАЇНІ
                    </h1>
                    <Search/>
                    <p className="header__example-text">
                        <b>Наприклад:</b> <u>Допомога Маріуполю</u> або <u>Фонд UWCF</u>
                    </p>
                </div>
            </div>
        </header>
    )
}