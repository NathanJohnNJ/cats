import './navbar.css';
import { NavLink } from 'react-router-dom';
import Basket from '../basket';

const NavBar = (props) => {

    return(
        <div className="navbar">
            <div className="NavLeft">
                <NavLink className={({isActive}) => isActive ? "Current": "Page" } to="/">HOME</NavLink>
                <NavLink className={({isActive}) => isActive ? "Current": "Page" } to="/adopt">ADOPT</NavLink>
            </div>
            <div className="NavRight">
                <Basket selectedCats={props.selectedCats}/>
            </div>
        </div>
    )
}
export default NavBar;