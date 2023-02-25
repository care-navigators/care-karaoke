import carekaraoke from "../images/flyer.jpg";
import "../style/home.css"

export default function Home() {
    return (
      <>
        <h1 className='header'>Care Karaoke</h1>
        <a className="flyer">
          <img alt="care-karaoke" src={carekaraoke} /> 
        </a>
      </>
    );
}