import React, { useState, useEffect, useRef } from 'react';
import { css, keyframes } from 'styled-components';
import '../css/game/movements.css';




const Obstacle = (props) => {


    const getRandomHeight = () => {
        let step1 = 140 - 80 + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2)

        return result;
    }
    const getRandomWidth = () => {
        let step1 = 100 - 40 + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2)

        return result;
    }

    const getRandomColor = () => {
        let lettersNumbers = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += lettersNumbers[Math.floor(Math.random() * 16)];
        }
        return color
    }





    const [divStyle, setDivStyle] = useState({})
    const [exist, setExist] = useState(false)
    const [timer, setTimer] = useState(-300)


    if (props.start === false) {




        const setDiv = () => {
            if (exist === false) {



                setTimer(timer - 10)

                document.documentElement.style.setProperty('--leftEnd', timer + "px");

                setExist(<div id="customDiv" className='customDiv' style={divStyle} ></div>)


                setDivStyle(
                    {
                        width: getRandomWidth() + "px",
                        height: getRandomHeight() + "px",
                        backgroundColor: getRandomColor(),
                        animation: "divMovements 2s infinite ease"

                    }

                )

            }
            else {
                setExist(false)
            }

        }

        setTimeout(() => {
            setDiv()
        }, 1000)



        return exist



    }
    else {
        return null
    }



}


















const PlayGame = (props) => {





    let isAlive = () => {

        setInterval(() => {
            const cube = document.getElementById("cube")
            const obstacle = document.getElementById("customDiv")

            if (obstacle === null) {
                return
            }
            else {
                let cubeBottom = parseInt(window.getComputedStyle(cube).getPropertyValue("bottom"))
                let obstacleHeight = parseInt(window.getComputedStyle(obstacle).getPropertyValue("height"))
                let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))

                if (obstacleLeft < 50 && obstacleLeft > 10 && cubeBottom - 59 <= obstacleHeight) {
                    props.setIsInAlive(false)
                    props.setStart(true)
                    const pGameOver = document.createElement("p")
                    pGameOver.innerHTML = "Game Over!"
                    pGameOver.className = "pGameOver"
                    pGameOver.id = "pGameOver"
                    document.getElementById("container-game").appendChild(pGameOver)
                }
                else {

                    props.setIsInAlive(true)
                }
            }

        }, 10)
    }


    if (props.buttonStart === false) {
        isAlive()
    }



    return (
        <>
            <div className={"playGame"}>
                <div id='cube' className={props.blockStyle} >
                    <div className="eye1"></div>
                    <div className="mouth"></div>
                    <div className="eye2"></div>
                </div>
                <Obstacle start={props.buttonStart}></Obstacle>
            </div>



        </>
    )
}

export default PlayGame;