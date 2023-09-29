
import './cats.css';
import { useEffect, useState } from 'react';
import MoreInfo from '../moreInfo';

const FetchCats = (props) => {
    const[cats, setCats] = useState([]);
    function catPrice() {
        let num = Math.floor(Math.random()*25000);
        let newNum = num/100;
        let catPrice = newNum.toFixed(2);
        return catPrice
    }
    function catName(){ 
        const names = ["Daisy", "Jasper", "Oliver", "Tiger", "Cleo", "Molly", "Tommy", "Casper", "Poppy", "Milly", "Toby", "Missy", "Leo", "Lola", "Gizmo", "Garfield", "Dusty", "Luna", "Simba", "Bella", "Lion", "Fred", "Lionel", "Meow", "Grumpy", "Blondie", "Love", "Angel", "Music", "Baby"]
        const random = Math.floor(Math.random() * names.length);
        return(names[random])
    }
    function onClickHandler(cat){
        const basket = props.basket
        const newBasket = basket.concat(cat)
        props.setBasket(newBasket)
        console.log(`Basket updated to ${props.basket}. This should include ${cat}.`)
    }
  
    const fetchData = async () => {
        try {
        const url = 'https://api.thecatapi.com/v1/images/search?format=json&has_breeds=1&limit=' + props.num;
        const response = await fetch(url, {
            headers:{"Content-Type" : "application/json",
            "x-api-key": "live_tJffoCfpPwkpbBaAYyUyEFxzPuZWLL3SsIJBvf1NUtcPk9rU6Skinbsra7dzeBK9"
            }
        })
        if (!response.ok) {
            throw new Error(response.statusText)
            }
        const data = await response.json()
        console.log(data)
        const catData = data.map((cat, i) => {
            return {
                catImage: cat.url,
                catBreed: cat.breeds[0].name,
                catCF: cat.breeds[0].child_friendly,
                catTemp: cat.breeds[0].temperament,
                catDF: cat.breeds[0].dog_friendly,
                catEnergy: cat.breeds[0].energy_level,
                catHypoallergenic: (cat.breeds[0].hypoallergenic)?'NO':'YES',
                catName: catName(),
                catPrice: catPrice()
            }
        })
        setCats(catData);
        console.log("This is the value of cats after setCats() has been run", cats)
        } catch (err) {
            console.log(err)
        }
    }
 // eslint-disable-next-line
  useEffect(() => { // eslint-disable-next-line
    fetchData()  // eslint-disable-next-line
  }, []);
  return (
    <div className="fetchCatsDiv">
        {(props.title)?<h1 className="title">{props.title}</h1>:<></>}
      <div className="cats">
      {cats.map((cat, i) => {
        console.log("This is cat from within the map", cat)
        return(
        <div key={i} className="map">
          <div className="catInfo">
            <h1 className="catName">{cat.catName}</h1>
            <img className="catImg" alt="cat" src={cat.catImage}></img>
            <div className="childCol">
              <h3 className="levelsHeader">Child Friendly<br></br>Rating:</h3>
              <h4 className="levelsValue">{cat.catCF}/5</h4>
            </div>
            <div className="dogCol">
              <h3 className="levelsHeader">Dog Friendly<br></br>Rating:</h3>
              <h4 className="levelsValue">{cat.catDF}/5</h4>
            </div>
          </div>
          <MoreInfo from={props.from} render={cat} cat={cat} />
          {(props.basket)?<button id="basketBtn" onClick={(cat) => {onClickHandler(cat)}}>Adopt Me!</button>:<></>}
        </div>)
      })}
     </div>
    </div>
  );
}

export default FetchCats;
