import '../style/pages/infoPageStyle.css'

import { Footer } from "../components/footer/Footer"
import { Menu } from "../components/menu/menu"
import { Info } from "../components/info/Info"
import { InfoHeader } from "../components/info_header/InfoHeader"

export const InfoPage = () =>{
    return(
        <>
            <div className="infoPage">
                <div className="container">
                    <Menu/>
                </div>
            </div>
            <InfoHeader/>

            <Info />
            <Footer />
        </>
    )
}