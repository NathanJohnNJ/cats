import BannerLeft from '../images/reachLeft.png';
import BannerRight from '../images/reachRight.png';
import BannerMiddle from '../images/reachMiddle.png';
import './banner.css'

const Banner = (props) => {

function bannerDisplay(){
    (props.page==="home")?
    <img src={BannerLeft} alt="Banner" className="bannerImg"></img>
    :(props.page==="adopt")?
    <img src={BannerRight} alt="Banner" className="bannerImg"></img>
    :
    <img src={BannerMiddle} alt="Banner" className="bannerImg"></img>
    
}

    return(
        <div className="banner">
            {bannerDisplay}
        </div>
    )
}
export default Banner;