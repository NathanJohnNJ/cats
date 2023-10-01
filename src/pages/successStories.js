import './style.css';
import banner from '../components/images/bannerHome.png';
import family from '../components/images/3-reviews/family.png';
import girl from '../components/images/3-reviews/girl.png';
import oldMan from '../components/images/3-reviews/old-man.png';

const CatsPage = () => {

    return(
        <div className="reviewsPage">
            <h1 className="pastTitle">PAST PAIRINGS</h1>
            <Banner banner={banner} />
            <p className="successStories">This is just a small example of some of the success stories we've had over the years...</p>
            <img src={girl} alt="Girl with cat" className="girlImg"></img>
            <img src={oldMan} alt="Man with cat" className="manImg"></img>
            <img src={family} alt="Family with cat" className="familyImg"></img>
        </div>
    )
}
export default CatsPage;