import './style.css'
import FetchCats from '../components/fetchCats';

const CatsPage = (props) => {


    return(
        <div className="catsPage">
            <FetchCats num='5' from="cats" basket={props.basket} setBasket={props.setBasket} />
            <FetchCats num='5' from="cats" basket={props.basket} setBasket={props.setBasket} />
            <FetchCats num='5' from="cats" basket={props.basket} setBasket={props.setBasket} />
            <FetchCats num='5' from="cats" basket={props.basket} setBasket={props.setBasket} />
        </div>
    )
}
export default CatsPage;