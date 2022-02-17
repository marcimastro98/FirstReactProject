import { coding, html, css, js, nodejs, react, python } from './indexExport'

const Language = () => {
    return (
        <>
            <p><img id="coding" src={coding} alt="" />Fullstack developer</p>
            <div className="icon">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={nodejs} alt="" />
                <img src={react} alt="" />
                <img src={python} alt="" />
            </div>
        </>
    )
}

export default Language