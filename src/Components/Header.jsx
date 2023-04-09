import "./Header.css"
import trollFace from "../assets/trollFace.png"
export default function Header(){
    return(
        <header className="header">
            <div className="logo-head">
            
            <img src={trollFace} alt="logo" className="trollFaceLogo"></img>
            <h3 className="header-text">Meme Generator</h3>
            </div>
            <div>
            <a href="https://github.com/Prachi-Gore"><img src="https://img.icons8.com/fluency/48/null/github.png" alt="Github"/></a>
            <a href="https://www.linkedin.com/in/prachi-gore-4772a11a5"><img src="https://img.icons8.com/color/48/000000/linkedin.png"alt="LinkedIn"/></a>
            </div>
        </header>
    )
}