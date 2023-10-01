import './style.css'
import FetchCats from '../components/fetchCats';
import Banner from '../components/banner';
import BannerTest2 from '../components/images/bannerTest2.png';
import flowchart from '../components/images/2-rehoming/flowchart.png'

const CatsPage = (props) => {

    return(
        <div className="catsPage">
            <h1 className="adoptionsTitle">ADOPTIONS</h1>
            <Banner banner={BannerTest2} />
            <img className="flowChart" src={flowchart} alt="Flowchart"></img>
            <FetchCats title="AVAILABLE ADOPTIONS" num='4' basket={props.basket} setBasket={props.setBasket} />
            <FetchCats num='4' basket={props.basket} setBasket={props.setBasket} />
            <FetchCats num='4' basket={props.basket} setBasket={props.setBasket} />
            <FetchCats num='4' basket={props.basket} setBasket={props.setBasket} />
        </div>
    )
}
export default CatsPage;