import './checkboxStyle.css'

import { useEffect, useState } from 'react'

export const Checkbox = (props) =>{
    const [style, setStyle] = useState("checkbox__box")

    useEffect(()=>{
        if(props.style === "active"){
            setStyle("checkbox__box active")
        }
    }, [style])

    return(
        <div className="checkbox">
            <div className={style}>✓</div>
            <p className="checjbox__text">
                {props.text}
            </p>
        </div>
    )
}