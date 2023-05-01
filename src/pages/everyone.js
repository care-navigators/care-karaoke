
import {Data} from '../data/bios-data'
import "../style/everyone.css";

export default function Everyone() {
    return (
        <>
            <section className="we-offer-area text-center bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="site-heading text-center">
                            <h2> Meet the team! </h2>
                        </div>
                    </div>
                </div>
                    <div className="row our-offer-items less-carousel">
                        {Data.map((bios, id) => {
                            const {firstname, description, imageUrl} = bios;
                            return (
                                <div key={id} href={id} className="col-md-4 col-sm-6 equal-height">
                                    <div className="item">
                                        <div className='picture-container' >
                                             <img 
                                             key={id} 
                                             className="icon" 
                                             src={imageUrl}                         
                                             style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                            />  
                                        </div>
                                        <h4>{firstname}</h4>
                                        <p>
                                            {description} 
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
            </div>
        </section>
        </>
      );
}

