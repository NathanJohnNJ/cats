    import './banner.css'

const Banner = (props) => {

    return(
        <div className="banner">
            <img src={props.banner} alt="Banner" className="bannerImg"></img>
        </div>
    )
}
export default Banner;