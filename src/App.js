import Card from './js-Card/card';
import React, { useState } from "react";
import Game from './js-Game/game'


const App = () => {
  const [card, setCard] = useState(true);
  if (card) {
    return (
      <>
        <Card card={card} setCard={setCard}></Card>
      </>
    );
  }
  else {
    return (
      <>
        <Game card={card} setCard={setCard}></Game>
      </>
    )

  }
}


export default App;
