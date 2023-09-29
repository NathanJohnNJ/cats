import './moreInfo.css';
import { useState } from 'react';
import Modal from 'react-modal';

const MoreInfo = (props) => {
    console.log(props.cat)

    const [modalIsOpen, setModalIsOpen] = useState(false);
    function openModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }
    function onClickHandler(cat){
        const basket = props.basket
        const newBasket = basket.concat(cat)
        props.setBasket(newBasket)
        console.log(`Basket updated to ${props.basket}. This should include ${cat}.`)
    }
    
                // catImage: cat.url,
                // catBreed: cat.breeds[0].name,
                // catCF: cat.breeds[0].child_friendly,
                // catDF: cat.breeds[0].dog_friendly,
                // catEnergy: cat.breeds[0].energy_level,
                // catName: catName(),

                // catTemp: cat.breeds[0].temperament,
                // catHypoallergenic: (cat.breeds[0].hypoallergenic)?'NO':'YES',
                // catPrice: catPrice()

    return (
        <>
        <div className="moreInfoBtn">
            <button id="moreInfo" onClick={openModal}>MORE INFO</button>
        </div>
        <div className="moreInfoModal">
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel='More info'
            className="modal"
            >
                <div className="morecatInfo">
                    <h1 className="morecatName">Meet {props.cat.catName} the {props.cat.catBreed}!</h1>
                    <h2 className="moreintro">...They can't wait to meet you!</h2>
                    <div className="newDiv">
                    <img className="morecatImg" alt="cat" src={props.cat.catImage}></img>
                    <fieldset className="data1">
                        <legend className="legend">Interactivity</legend>
                        <label htmlFor="childFriend">Child Friendly Rating
                            <p>{props.cat.catCF}/5</p></label>
                        <label htmlFor="dogFriend">Dog Friendly Rating
                            <p>{props.cat.catDF}/5</p></label>
                        <label htmlFor="energy">Energy Levels
                            <p>{props.cat.catEnergy}/5</p></label>
                    </fieldset>
                    <fieldset className="data2">
                        <legend className="legend">Temperament</legend>
                        {props.cat.catTemp.split(',').map((trait, i) => {
                            const identifier = `temp${i}`;
                            return(
                            <p className={identifier} key={i}>  {trait}  </p>
                            )
                        })}
                    </fieldset>
                    </div>
                <div className="morehypo">
                {(props.cat.catHypoallergenic==="YES")?<p>{props.cat.catName} is Hypoallergenic, meaning they're safe to live with anyone, regardless of allergies!</p>:<p>We're sorry, {props.cat.catName} is not Hypoallergenic. If you suffer with an allergy to cats, we would recommend you try a different breed.</p> }
                </div>
                    <div className="moreprice">
                        <p className="moredontSell">Whilst we don't sell cats here at Cats4Lyf... we do encourage a small donation so that we can keep striving to rescuing more cats and kittens and introducing them to more people like you!</p>
                        <p className="morerecommended">The recommended donation for {props.cat.catName} is just</p>
                        <p className="morefinalPrice">£{props.cat.catPrice}!</p>
                    </div>
                </div>
                <div className="morebackOrBasket">
                    <button id="modalBtn" onClick={closeModal} >BACK</button>
                    <button id="basketBtn" onClick={(cat) => {onClickHandler(cat)}} >ADOPT ME!</button>
                </div> 
            </Modal>
     </div>
     </>

    )
};

export default MoreInfo;