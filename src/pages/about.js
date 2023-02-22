import arnold from "../images/people/Arnold-Schwarzeneggers-Diet-and-Workout-Plan.jpg"
export default function About() {
    return (
        <>
          <div className='bios'>
            <div className='left-half'>
            <h1>Jean</h1>
                <a className='img-container'>
                    <img className='bios-img' alt="bios-photo" src={arnold}/>
                </a>
            </div>
            <div className='right-half'>
                <blockquote className='bios-desc' >
                  <h1>Misson Statement</h1>
                    <p>
                        Im the boss
                    </p>
                </blockquote>
                <blockquote className='bios-desc' >
                  <h1>Bio Thing</h1>
                    <p>
                       additional text
                    </p>
                </blockquote>
            </div>
        </div>
        </>
      );
}