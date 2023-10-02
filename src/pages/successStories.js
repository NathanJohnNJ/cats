import './style.css';
import Banner from '../components/banner';
import banner from '../components/images/bannerPast.png';
import family from '../components/images/3-reviews/family.png';
import girl from '../components/images/3-reviews/girl.png';
import oldMan from '../components/images/3-reviews/old-man.png';
import FetchCats from '../components/fetchCats';

const SuccessPage = (props) => {

    return(
        <div className="reviewsPage">
            <div className="successText">
                <h1 className="pastTitle">PAST PAIRINGS</h1>
                <Banner banner={banner} />
                <p className="successStories">This is just a small example of some of the success stories we've had over the years...</p>
            </div>
            <div className="images">
                <img src={girl} alt="Girl with cat" className="girlImg"></img>
                <img src={oldMan} alt="Man with cat" className="manImg"></img>
                <img src={family} alt="Family with cat" className="familyImg"></img>
            </div>
            <FetchCats num='5' title='Featured...'  basket={props.basket} setBasket={props.setBasket} />
        </div>
    )
}
export default SuccessPage;