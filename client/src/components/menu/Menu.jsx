import './menuStyle.css'

export const Menu = () =>{
    return(
        <menu className='menu'>
            <ul className="menu__list flex">
                <ul className="menu__list-menu flex">
                    <li className="menu__list-menu_item">
                        <a href="#" className="menu__link">
                            Мапа
                        </a>
                    </li>
                    <li className="menu__list-menu_item">
                        <a href="#" className="menu__link">
                            Про нас
                        </a>
                    </li>
                    <li className="menu__list-menu_item">
                        <a href="#" className="menu__link">
                            Питання та відповіді
                        </a>
                    </li>
                </ul>
                <ul className="menu__list-auth flex">
                    <li className="menu__list-auth_register">
                        <a href="#" className="menu__link">
                            Зареєструватися
                        </a>
                    </li>
                    <li className="menu__list-auth_login">
                        <button className='menu__login-btn'>
                            Увійти до кабінету
                        </button>
                    </li>
                </ul>
            </ul>
        </menu>
    )
}