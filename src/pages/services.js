
import {Data} from '../data/services'
import { useParams } from "react-router-dom";
import "../style/services.css";


export default function Services() {
    let { id } = useParams(); 

    return(
        <div className='service'>
            <div className='top-half'>
                <h1 className='header'> { Data[id].name }  </h1>
                <a className='img-container'>
                    <img className='services-img' alt="services-photo" src={Data[id].imageUrl}/>
                </a>
                <blockquote className='services-desc' >
                    <p>
                        {Data[id].description}
                    </p>
                </blockquote>
            </div>
            <div className='bottom-half'>
                <a className='img-container'>
                    <img className='services-img' alt="services-photo-2" src={Data[id].imageUrl}/>
                </a>
            </div>
        </div>
    )
}