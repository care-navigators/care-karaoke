import carekaraoke from "../images/flyer.jpg";
import "../style/home.css"

export default function Home() {
    return (
      <>
        <a className="flyer">
          <img alt="care-karaoke" src={carekaraoke} /> 
        </a>
      </>
    );
}