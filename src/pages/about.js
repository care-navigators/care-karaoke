import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/about.css";
import { Photos } from '../data/photos';

export default function About() {
  return (
    <div className='bios'>
      <div className='left-half'>
        <h1>About Us</h1>
        <Carousel interval={2250} >
          {Photos.map(photo => (
            <Carousel.Item key={photo.id} >
              <div className='carousel-container'>
              <img
                className='bios-img'
                alt='bios-photo'
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                src={photo.imageUrl}
              />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className='right-half'>
        <blockquote className='bios-desc'>
          <h1>Misson Statement</h1>
          <p>Im the boss</p>
        </blockquote>
      </div>
    </div>
  );
}

{/* <a className='img-container'>
<img className='bios-img' alt="bios-photo" src={arnold}/>
</a> */}