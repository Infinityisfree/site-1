import './search.css';
import search from '../image/search.svg'

function Search() {
  return (
    <div className='search'>
      <input className='search-input' type='text'/>
      <img className='search-icon' src={search} alt='Search icon'/>
    </div>
  );
}

export default Search;