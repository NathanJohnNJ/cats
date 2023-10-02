import catBanner from '../images/footer.png';
import './footer.css'

const Footer = () => {



    return(
        <footer className="footer">
            <img src={catBanner} alt="Footer banner" className="footerImg"></img>
        </footer>
    )
}
export default Footer;