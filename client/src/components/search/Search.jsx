import './searchStyle.css'

export const Search = () =>{
    return(
        <div className='search'>
            <input type="text" className="search__input" placeholder='Знайти місто чи волонтерську організацію'/>
            <button className='search__btn'>
                <img src="img/icons/search.svg" alt="" className="search__icon" />
            </button>
        </div>
    )
}