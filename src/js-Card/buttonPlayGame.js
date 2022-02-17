import React, { useState, useEffect } from 'react';


const Play = (props) => {







    const handleClick = () => {




        const card = document.getElementsByClassName('card')[0]

        card.classList.add("card-rotation");

        setTimeout(() => {
            const selectCard = document.getElementsByClassName("container")[0];
            selectCard.remove();

        }, 1000)

        setTimeout(() => {
            props.setCard(false)
        }, 1400)


    }




    return (
        <p draggable="false" onClick={handleClick}>Play Game!</p>
    )
}

export default Play;
