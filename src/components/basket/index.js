import './basket.css';
import trolley from '../images/0-navbar/shoppingcart.png'

const Basket = (props) => {

    function onClickHandler(){
        const r = document.getElementById('mainBasket');
        r.style.setProperty('animation', '3s slide-in ');
        r.style.setProperty('animation-fill-mode', 'forward');
    }
    function onCloseHandler(){
        const r = document.getElementById('mainBasket');
        r.style.setProperty('animation', '3s ease slide-out ');
        r.style.setProperty('animation-fill-mode', 'forward');
    }
    


    return(
        <div className="basket">
            <div className="trolley">
                <button onClick={onClickHandler}><img src={trolley} className="trolley" alt="Shopping trolley" ></img></button>
            </div>
             <div className="mainBasket" id="mainBasket">
             <button onClick={onCloseHandler}><h1 className="close" >X</h1></button>
            <p>I'm in the basket!</p>
            </div>
        </div>

    )
}

export default Basket;