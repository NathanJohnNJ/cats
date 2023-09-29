import './basket.css';
import trolley from '../images/0-navbar/shoppingcart.png'

const Basket = (props) => {

    function onClickHandler(){
        const r = document.getElementById('mainBasket');
        r.style.setProperty('animation', 'slide-in 3s ease 1');
        r.style.setProperty('animation-fill-mode', 'forward');
    }
    function onCloseHandler(){
        const r = document.getElementById('mainBasket');
        r.style.setProperty('animation', 'slide-out 3s ease 1');
        r.style.setProperty('animation-fill-mode', 'forward');
    }
    


    return(
        <div className="basket">
            <div className="trolley">
                <img src={trolley} className="trolley" alt="Shopping trolley" onClick={onClickHandler}></img>
            </div>
             <div className="mainBasket" id="mainBasket">
             <h1 className="close" onClick={onCloseHandler}>X</h1>

            </div>
        </div>

    )
}

export default Basket;