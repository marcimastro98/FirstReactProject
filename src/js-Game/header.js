import React, { useState } from "react";





const Header = (props) => {
    const [button, setButton] = useState(true);
    const [pStyle, setPsyle] = useState("noStyle")
    const pGameOver = document.getElementById("pGameOver")

    const handleClickReturn = () => {
        if (props.start === false) {
            props.setStart(true);
            props.setIsInAlive(false)


        }
        else {

            const card = document.getElementsByClassName('card')[0]

            card.classList.add("card-rotation");

            setTimeout(() => {
                const selectCard = document.getElementById("container-game");
                selectCard.remove();

            }, 1000)

            setTimeout(() => {
                props.setCard(true)
            }, 1400)

        }
    }



    const handleClick = () => {

        if (props.start === true) {
            props.setStart(false);
            setButton(false)
            props.setsetContainerStyle("container-gameStart")
            setPsyle("pStyleJump")
            props.setPoints(0)
            if (pGameOver) {
                pGameOver.remove()
            }
        }

    }


    const buttonComponent = () => {
        if (button) {
            return <button onClick={handleClick}>S T A R T</button>
        }
        else {
            if (props.start === true) {
                setButton(true)
                props.setsetContainerStyle("container-game")

            }
        }
    }








    const handleClickGround = () => {

        props.blockStyle("square-movements-up")

        setPsyle("noStyle")


        setTimeout(() => {
            props.blockStyle("square-movements")
        }, 300)
    }




    return (
        <>
            <div className="return" onClick={handleClickReturn}><p>&#8249;</p></div>
            <p className="pPoints">Score {props.points}</p>
            {buttonComponent()}
            <div className="ground" onClick={handleClickGround}><p className={pStyle}>Click here to jump!</p></div>

        </>
    )
}

export default Header;