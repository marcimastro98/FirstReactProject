import React, { useState } from "react";
import { linkedin, github } from './indexExport';

function Drag(props) {

    const [isActive, setActive] = useState(true);
    const [style, setStyle] = useState(null)


    const listClassName = document.getElementById("liLink");
    const listClassNameGit = document.getElementById("liGit");




    const linkedinId = document.getElementById("Linkedin")
    const githubId = document.getElementById("Github")



    const handleCLick = () => {
        setActive(!isActive)

        if (props.name === "dragLink") {



            props.setLiStyle(false);

            setTimeout(() => {
                window.location.assign("https://www.linkedin.com/in/marcello-mastroeni/");

            }, 5000)
            const createDiv = document.createElement('div');
            createDiv.className = "createDiv";
            listClassName.appendChild(createDiv);


            linkedinId.classList.remove("visitMe");
            linkedinId.classList.add("linkClick");
            linkedinId.innerHTML = "Linkedin";






        }


        else if (props.name === "dragGit") {
            setStyle({ backgroundColor: "#fff" })


            props.setSecondLiStyle(false);

            setTimeout(() => {
                window.location.assign("https://github.com/marcimastro98");
            }, 5000)
            const createDiv = document.createElement('div');
            createDiv.className = "createDivGit";
            listClassNameGit.appendChild(createDiv);


            githubId.classList.remove("visitMe");
            githubId.classList.add("gitClick");
            githubId.innerHTML = "Github";

        }


    }

    const selectImg = () => {

        const select = props.name === "dragLink" ?

            <img className={isActive ? "linkedin" : "active"} onClick={handleCLick} return={returnPosition} src={linkedin} alt="link_log" />
            :
            <img className={isActive ? "github" : "active"} onClick={handleCLick} style={style} src={github} alt="git_log" />

        return select

    }

    const returnPosition = setTimeout(() => {
        if (isActive === false) {
            setActive(!isActive)
        }

    }, 3000)

    return (
        <>

            {selectImg()}

        </>
    )




}


export default Drag;

