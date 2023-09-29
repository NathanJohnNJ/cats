import './style.css';
import FetchCats from '../components/fetchCats';


const HomePage = (props) => {


    return(
        <div className="homepage">
            <FetchCats num='3' title='TOP CATS' from="home"/>
            <FetchCats num='5' title='Featured...' from="home" basket={props.basket} setBasket={props.setBasket} />

        </div>
    )
}
export default HomePage;