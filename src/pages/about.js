import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Photos } from '../data/photos';

export default function About() {
  return (
    <div className='bios'>
      <div className='left-half'>
        <h1>Jean</h1>
        <Carousel interval={2250}>
          {Photos.map(photo => (
            <Carousel.Item key={photo.id}>
              <img
                className='bios-img'
                alt='bios-photo'
                src={photo.imageUrl}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className='right-half'>
        <blockquote className='bios-desc'>
          <h1>Misson Statement</h1>
          <p>Im the boss</p>
        </blockquote>
        <blockquote className='bios-desc'>
          <h1>Bio Thing</h1>
          <p>additional text</p>
        </blockquote>
      </div>
    </div>
  );
}

{/* <a className='img-container'>
<img className='bios-img' alt="bios-photo" src={arnold}/>
</a> */}