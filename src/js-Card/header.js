import { myEmoji } from './indexExport'

const Header = () => {
    return (
        <>
            <div className="header">
                <img id="personal_ph" src={myEmoji} alt="Foto personale" />

                <p>Marcello Mastroeni</p>
            </div>
            <hr id="line" />
        </>
    );
}




export default Header;

