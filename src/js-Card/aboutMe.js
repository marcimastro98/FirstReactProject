import { location } from './indexExport'


const AboutMe = () => {
    return (
        <>
            <p>👨🏻‍💻 Engineering student</p>
            <p> <a href="https://www.google.it/maps/@37.4906905,15.0074783,12z"> <img id="location" src={location} alt="" /> <b>Sicily,Italy</b></a></p>
        </>
    )
};

export default AboutMe;