
// import {Data} from '../data/bios-data'
// import { useParams } from "react-router-dom";
// import "../style/everyone.css";

// export default function Everyone() {
//     //let { id } = useParams(); 

//         return(
//             <ul className='container'>
//              {Data.map((bios, id) => {
//                const {firstname, lastname, imageUrl} = bios;
//                return (
//                  <div className='profile-conatiner' key={id}>
//                    <h3 className='name' >{firstname + " " + lastname}</h3>
//                    <a href={"bios/" + id}>
//                         <img className="image" alt={id} src={imageUrl}/>              
//                     </a>
//                  </div>
//                );
//              })}
//             </ul>);
// }