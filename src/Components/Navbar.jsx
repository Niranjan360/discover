import { Link } from 'react-router-dom';
import logo from '../logo.jpeg'
const Navbar = ({liked}) => {
    return ( 
        <nav>
            <Link to="/"> <img src={logo} alt="loading your logo" /></Link>
            <div className="searchbar">
                <input type="search"  placeholder="Enter your search"/>
                <button><i className='bx bx-search-alt-2'></i></button>
            </div>
            <Link to="/favs"><i className='bx bx-heart-circle'>{liked}</i></Link>
        </nav>
    );
}
export default Navbar;