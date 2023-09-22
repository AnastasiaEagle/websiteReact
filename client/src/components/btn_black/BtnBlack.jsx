import { useState, useEffect } from 'react'
import './btnBlackStyle.css'

export const BtnBlack = (props) =>{
    const [style, setStyle] = useState("btn_black")
    useEffect(()=>{
        if(props.style === "white"){
            setStyle("btn_black white")
        }
    }, [style])

    return(
        <>
        <button className={style}>
            {props.text}
        </button>
        </>
    )
}