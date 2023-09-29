import './style.css'
import FetchCats from '../components/fetchCats';

const CatsPage = (props) => {


    return(
        <div className="catsPage">
            <FetchCats title="AVAILABLE ADOPTIONS" num='5' basket={props.basket} setBasket={props.setBasket} />
            <FetchCats num='5' basket={props.basket} setBasket={props.setBasket} />
            <FetchCats num='5' basket={props.basket} setBasket={props.setBasket} />
            <FetchCats num='5' basket={props.basket} setBasket={props.setBasket} />
        </div>
    )
}
export default CatsPage;