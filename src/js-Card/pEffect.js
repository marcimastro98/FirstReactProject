import React, { useState, useEffect, useReducer, useCallback, useMemo } from 'react';



const Link = (type, setPstyle, stato) => {
    const [name, setName] = useState(type)




    const set = () => {


        if (name === type) {


            setName("Visit me!")
            setPstyle("visitMe")



        }
        else {


            setName(type)
            setPstyle("pStyle")



        }



    }





    useEffect(() => {


        if (stato === true) {
            const setIsActive = setTimeout(set, 3000)
            return () => clearInterval(setIsActive)

        }

    }, [name])




    return name

}












/* useEffect(() => {
    set();
}, [link])
return link; */

export default Link