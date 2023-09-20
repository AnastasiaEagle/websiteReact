import { InfoData } from "./info_data/InfoData"
import { InfoImage } from "./info_image/InfoImage"
import { InfoList } from "./info_list/InfoList"
import { Verification } from "./verification/Verification"
import { Website } from "./website/Website"

export const Info = () =>{
    return(
        <div className="container">
            <div className="info">
                <Verification />
                <br />
                <Website />
                <br />
                <InfoData />
                <br />
                <InfoImage />
                <br />
                <InfoList />
            </div>
        </div>
    )
}