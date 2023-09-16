import './btnBlackStyle.css'

export const BtnBlack = (props) =>{
    return(
        <>
        <button className='btn_black'>
            {props.text}
        </button>
        </>
    )
}