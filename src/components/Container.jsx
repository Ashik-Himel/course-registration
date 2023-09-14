import { useState, useEffect } from "react";
import Card from "./Card";
import Cart from "./Cart";

const Container = () => {
  const [cards, setCards] = useState([]);
  const [hours, setHours] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    fetch('/courses.json')
    .then(res => res.json())
    .then(data => setCards(data))
  }, []);

  function handleClick(card) {
    if (cartItem.find((item => item.title === card.title))) alert("This item exist in the cart!")
    else if (hours + card.credit > 20) alert('Insufficient credit hours')
    else {
      setHours(hours + card.credit);
      setCartItem([...cartItem, card]);
    }
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8 items-start">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {
          cards.map(card => <Card key={card.id} card={card} handleClick={handleClick}></Card>)
        }
      </div>
      <div className="w-full lg:w-[280px] bg-white p-6 rounded-lg shadow-lg lg:sticky lg:top-8">
        <Cart cartItem={cartItem}></Cart>
      </div>
    </div>
  );
};

export default Container;