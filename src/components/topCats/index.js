import './topcats.css';
import FetchCats from '../fetchCats'


const TopCats = (props) => {
    

  
    return (
        <div className='product'>
            <div className= 'product-heading'>
                <h1>TOP CATS!</h1>
                <h2>WHAT ARE YOU WAITING FOR?</h2>
                <p>Find out more about each cat by clicking the button below.</p>
            </div> 
            <div className="image-row-1">
            <FetchCats num='3' basket={props.basket} setBasket={props.setBasket} />
        </div>
        </div>
    )
};


export default TopCats;