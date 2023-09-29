import './navbar.css';
import { NavLink } from 'react-router-dom';
import Basket from '../basket';

const NavBar = (props) => {

    return(
        <div className="navbar">
            <NavLink className={({isActive}) => isActive ? "Current": "Page" } to="/">HOME</NavLink>
            <NavLink className={({isActive}) => isActive ? "Current": "Page" } to="/about">WHAT WE DO</NavLink>
            <NavLink className={({isActive}) => isActive ? "Current": "Page" } to="/contact">CONTACT US</NavLink>
            <NavLink className={({isActive}) => isActive ? "Current": "Page" } to="/adopt">ADOPT</NavLink>
            {/* <Login /> */}
            <Basket selectedCats={props.selectedCats}/>
        </div>
    )
}
export default NavBar;