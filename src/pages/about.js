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
        <blockquote>
          <h1>Mission Statement</h1>
          <p>
          Care Karaoke DJ and karaoke company provides a professional entertainment service with a wide variety of hosts with unique personalities. The owner's background is in nursing. She owns two healthcare companies Care Navigators and Care Guardians. Hence. the name of the company originated there. 

We take pride in helping your event become a wonderful experience. When you hire us, you are investing in the best sound, limitless music, and an incredible host for your wedding, corporate event, picnic, private party, or karaoke show. For karaoke, we utilize our soundboard to enhance the quality of your voice.

Our system is of professional quality. We use digital music with a laptop computer and high end speakers. We use Shure wireless microphones for their mobility and sound experience. Our LED dance lighting is included in our price for an outstanding visual effect on the dance floor. We can also provide uplighting for an additional cost to enhance the ambience of your event. 

During wedding receptions and formal events, the DJ's attire will will be professional, with a suit and tie. You can request the DJ to wear a tuxedo. At restaurants, bars, outdoor picnics, private parties, or karaoke shows the DJ's attire will be casual.

Arrival to a wedding or corporate event will be 1 hour prior to your event. We will run a sound check prior to your guests arriving. We will promptly lead you through all the formalities in a prompt, precise manner and make sure everything runs smoothly and efficiently.
We can be extremely upbeat it low-key depending on the event and your preference. We could even throw karaoke in at the wedding reception if that is something you would enjoy. 

          </p>
        </blockquote>

        <blockquote className='bios-desc'>
          <h1>About Us</h1>
          <p>We provide DJ services at weddings, corporate events, picnics, private parties, and karaoke shows. Our DJs are as unique as the people who hire us. We are creative artists who live to entertain you. We have a plethora of DJs, with unique backgrounds. We have a passion for music just like you do. Music is a personal choice. We will honor your wishes and create a catalog of music for your personal preference and style. 

We pride ourselves on striving to be the best DJ company. We are different. We strive to have the best sound. We deliver that incredible sound to you. If you're a singer we make you sound like the best version of yourself. We share our clients’ enthusiasm for music and it shows at our events. 

We are committed to providing the best experience for our clients from sound, to lighting, to being a great host for you. 

Our company has grown quite a bit since we launched it back in 2020. It truly grew out of COVID. The owner lived in a home tucked away in a remote area. She wanted the best equipment for DJ and karaoke sound for her own entertainment purposes. She started doing a few regular karaoke shows, acquired valuable employees, and locating DJs with amazing backgrounds in the industry. She purchased another company with a number of DJs. This helped to expand the company into providing multiple events, many on a weekly basis. The owner used "care" in her company name due to her ownership of two companies Care Navigators and Care Guardians and her background in nursing. 

We operate this business the way it should be done with 
Integrity and ethical values. We respect our clients wishes and choices without exception. We want you to have the best possible event. We love it when you rave about us to other potential clients. We take pride in training our DJs for as long as possible to deliver excellent experiences for you. We treat our clients the way they deserve to be treated, which means respecting their time, their questions, and their wishes for their special day. We are reliable and trust worthy. We will be on time and gain your confidence. We are honored to serve our clients. 

If you want an upbeat DJ who brings the party and makes you want to bust a move WE are your company of choice. 

If you want a DJ who is professional and polished, and creates the atmosphere for corporate event to shine the spotlight on the people attending WE are your company of choice. 

Whatever you wish is....is our desire. We are here to serve your needs. We can meet in advance to prepare for any event. We can suggest ideas or let you direct the entire process. 

If you have read this section in its entirety and have come to the conclusion about us I will offer a discount on your event. For karaoke gigs, the discount will be for the first show.</p>
        </blockquote>
      </div>
    </div>
  );
}

{/* <a className='img-container'>
<img className='bios-img' alt="bios-photo" src={arnold}/>
</a> */}