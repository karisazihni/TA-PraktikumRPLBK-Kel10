
import logo from "../images/app_pict.jpg";
import "./About.css";

export default function About() {

    return (
        <div className='About'>
            <div className="App-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="descMain">
                <p id="descAbout">
                    Ini adalah aplikasi tentang A & W (Advice & Wisdom)
                </p>
            </div>
        </div>
    )
  }