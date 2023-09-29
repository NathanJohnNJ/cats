import './style.css';
import FetchCats from '../components/fetchCats';
import TopCats from '../components/topCats';


const HomePage = (props) => {


    return(
        <div className="homepage">
            <TopCats basket ={props.basket} setBasket={props.setBasket} />
            <FetchCats num='5' title='Featured...'  basket={props.basket} setBasket={props.setBasket} />

        </div>
    )
}
export default HomePage;