import logo from '../logo.jpeg'
const Navbar = () => {
    return ( 
        <nav>
            <img src={logo} alt="loading your logo" />
            <div className="searchbar">
                <input type="search"  placeholder="Enter your search"/>
                <button><i className='bx bx-search-alt-2'></i></button>
            </div>
            <i className='bx bx-heart-circle'></i>
        </nav>
    );
}
export default Navbar;