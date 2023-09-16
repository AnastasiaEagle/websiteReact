import { Menu } from '../menu/menu'
import './footerStyle.css'

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <Menu/>
            </div>
        </footer>
    )
}