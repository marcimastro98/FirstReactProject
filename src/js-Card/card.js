import React, { useState, useEffect } from "react";
import style from '../css/card/card.css';
import { Drag, Header, AboutMe, Language, Play } from './indexExport';
import Link from './pEffect'






const Card = (props) => {



    const [liStyle, setLiStyle] = useState(true);
    const [SecondliStyle, setSecondLiStyle] = useState(true);
    const [pStyle, setPstyle] = useState("pStyle")





    useEffect(() => {
        setTimeout(() => {

            if (liStyle === false) {
                setLiStyle(!liStyle)
            }

        }, 3000)
    })

    useEffect(() => {
        setTimeout(() => {

            if (SecondliStyle === false) {
                setSecondLiStyle(!SecondliStyle)
            }

        }, 3000)
    })

    const cardState = props.card

    const setCard = props.setCard

    return (
        <>


            <div className='card'>
                <div className="container">
                    <Header></Header>
                    <div className='link'>
                        <ul>
                            <li id="liLink" className={liStyle ? "listStyle" : "editLiStyle"} >
                                <Drag setLiStyle={setLiStyle} name="dragLink"></Drag>
                                <p id="Linkedin" className={pStyle} dangerouslySetInnerHTML={{ __html: Link("Linkedin", setPstyle, cardState) }}></p>
                            </li>

                            <li id="liGit" className={SecondliStyle ? "listStyle" : "editSecondLiStyle"}>
                                <Drag setSecondLiStyle={setSecondLiStyle} name="dragGit"></Drag>
                                <p id="Github" className={pStyle} dangerouslySetInnerHTML={{ __html: Link("Github", setPstyle, cardState) }}></p>
                            </li>

                        </ul>
                    </div>
                    <div className="date">
                        <AboutMe></AboutMe>
                    </div>

                    <div className="language">
                        <Language></Language>
                    </div>

                    <div className="play">
                        <Play setCard={setCard}></Play>
                    </div>

                </div>
            </div>





        </>

    )
}


export default Card;