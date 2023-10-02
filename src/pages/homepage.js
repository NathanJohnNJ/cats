import './style.css';
import FetchCats from '../components/fetchCats';
import TopCats from '../components/topCats';
import Banner from '../components/banner';
import BannerHome from '../components/images/bannerHome.png';


const HomePage = (props) => {

    return(
        <div className="homepage">
            <h1 className="homeTitle">CATS 4 LYF</h1>
            <Banner banner={BannerHome} />
            <TopCats basket={props.basket} setBasket={props.setBasket} />
            <FetchCats num='5' title='Featured...'  basket={props.basket} setBasket={props.setBasket} />

        </div>
    )
}
export default HomePage;