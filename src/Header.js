import './Header.css'

export default function Header (){
    return(
      <header>
      <form id="search-form">
        <input
          type="search" placeholder="Enter a city.." required className="search-input" id="search-input" />
        <input type="submit" value="Search" className="search-button" />
      </form>
      </header>
    );
}