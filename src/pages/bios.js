
import {Data} from '../data/bios-data'
import { useParams } from "react-router-dom";
import "../style/bios.css";


export default function Bios() {
    let { id } = useParams(); 

    return(
        <div className='bios'>
            <div className='left-half'>
                <h1> { Data[id].firstname }  </h1>
                <a className='img-container'>
                    <img className='bios-img' alt="bios-photo" src={Data[id].imageUrl}/>
                </a>
            </div>
            <p>
                {Data[id].description}
            </p>
        </div>
    )
}