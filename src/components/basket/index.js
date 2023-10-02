import './basket.css';
import trolley from '../images/0-navbar/shoppingcart.png'
import Modal from 'react-modal';
import { useState } from 'react';

const Basket = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [total, setTotal] = useState(0.00);
    const basket = props.basket;

    function openModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }

    return(
        <div className="basket">
            <div className="trolley">
                <img src={trolley} className="trolley" alt="Shopping trolley" onClick={openModal} ></img>
            </div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            closeTimeoutMS={500}
            ariaHideApp={false}
            contentLabel='More info'
            className="modal"
            >
                <div className="mainBasket" id="mainBasket">
                    <h1 className="basketTitle">BASKET</h1>
                    <div>
                        {basket.map((cat, i) => {
                            const newPrice = total+cat.catPrice;
                            setTotal(newPrice);
                            return(
                            <div className="basketItem">
                                <img src={cat.catImage} className="basketImg"></img>
                                <div className="basketRight">
                                    <h2 className="basketCatName" key="i">{i+1}. {cat.catName}</h2>
                                    <p className="basketBreed">Breed: {cat.catBreed}</p>
                                    <p className="basketPrice">Donation: £{cat.catPrice}</p>
                                </div>
                            </div>)
                        })}
                        <h3 className="totalPrice">Total Donation: £{total}</h3>
                    </div>
                </div>
            </Modal>
            
        </div>
    )
}

export default Basket;