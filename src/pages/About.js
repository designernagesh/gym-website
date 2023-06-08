import aboutImage from '../images/about.png';

function About() {
  return (
    <section id="about">
        <div className="about-image">
            <img src={aboutImage} alt='about' />	
        </div>
        <div className="about-text">
            <h2>Learn More About Us</h2>         
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur, eros a dapibus ullamcorper, arcu purus accumsan nunc, nec imperdiet leo lacus sit amet urna. Etiam eu ornare tellus. Praesent sed neque dapibus, ultrices risus in, convallis turpis. Curabitur ornare mauris in pulvinar viverra.</p>
            <button>READ MORE</button>
        </div>            
    </section>
  );
}

export default About;
