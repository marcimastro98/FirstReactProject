import { useState } from 'react';
import style from '../css/game/game-card.css'
import style2 from '../css/game/game-effect.css'
import Header from './header';
import PlayGame from './playGame';

const Game = (props) => {
    const [start, setStart] = useState(true)
    const [containerStyle, setContainerStyle] = useState("container-game")
    const [points, setPoints] = useState(0)
    const [isInAlive, setIsInAlive] = useState()
    const [blockStyle, setBlockStyle] = useState("square-movements")



    if (isInAlive === true) {
        setTimeout(() => {
            setPoints(points + 1)
        }, 1500)


    }
    return (
        <>
            <div className="card">
                <div id="container-game" className={containerStyle}>
                    <Header card={props.card}
                        setCard={props.setCard}
                        start={start}
                        setsetContainerStyle={setContainerStyle}
                        setStart={setStart}
                        points={points}
                        setPoints={setPoints}
                        setBlockStyle={blockStyle}
                        blockStyle={setBlockStyle}
                        setIsInAlive={setIsInAlive}>
                    </Header>

                    <PlayGame buttonStart={start} setStart={setStart} setIsInAlive={setIsInAlive} blockStyle={blockStyle}></PlayGame>
                </div>
            </div>
        </>
    )
}

export default Game;