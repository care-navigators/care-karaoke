
import {Data} from '../data/services'
import { useParams } from "react-router-dom";
import "../style/service.css";


export default function Service() {
    let { id } = useParams(); 

    return(
        <div className='bios'>
            <div className='left-half'>
                <h1> { Data[id].name }  </h1>
                <div className='img-container'>
                    <a >
                        <img className='bios-img' alt="bios-photo" src={Data[id].imageUrl}/>
                    </a>
                </div>
            </div>
            <p>
                {Data[id].description}
            </p>
        </div>
    )
}