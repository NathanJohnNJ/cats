import './navbar.css';
import { NavLink } from 'react-router-dom';
import Basket from '../basket';

const NavBar = (props) => {

    return(
        <div className="NavbarContainer">
            <div className="navbar">
                <div className="NavLeft">
                    <NavLink className={({isActive}) => isActive ? "Current": "Page" } to="/">HOME</NavLink>
                    <NavLink className={({isActive}) => isActive ? "Current": "Page" } to="/adopt">ADOPT</NavLink>
                    <NavLink className={({isActive}) => isActive ? "Current": "Page" } to="/success">PAST PAIRINGS</NavLink>
                </div>
                <div className="NavRight">
                    <Basket selectedCats={props.selectedCats}/>
                </div>
            </div>
        </div>
    )
}
export default NavBar;