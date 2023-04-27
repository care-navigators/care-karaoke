import {Data} from '../data/services'
import "../style/services.css"

export default function Services() {
    return (
        <>
            <section className="we-offer-area text-center bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="site-heading text-center">
                            <h2>What we <span>Offer</span></h2>
                        </div>
                    </div>
                </div>
                    <div className="row our-offer-items less-carousel">
                        {Data.map((services, id) => {
                            const {name, shortDescription, icon} = services;
                            return (
                                <div key={id} href={id} className="col-md-4 col-sm-6 equal-height">
                                    <div className="item" >
                                        <a href={"services/" + id} >
                                        <i key={id} src={icon}>
                                             <img key={id} className="icon" src={icon}/>  
                                        </i>
                                        <h4>{name}</h4>
                                        <p>
                                            {shortDescription} 
                                        </p>
                                        </a>
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

