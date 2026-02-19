import Logo from '../../assets/images/background.jpg';
import './services.component.css'

const ServicesComponent = () => {
    return (
        <div className='services'>
            <img src={Logo} className='background' alt="a background of purple with Our Services on it" height="350" width="100%"/>
            <h2>Our Services</h2>
            <section className="section">
                <p>We offer a wide range of event planning services to make your special occasion unforgettable. 
                    From weddings to corporate events, we handle every detail with precision and care.</p>
                    <div className="cards">
                        <div className="card">
                            <h3>Event Planning</h3>
                            <p>Full event planning and coordination</p>
                            <p>Partial event planning (assisting with specific aspects)</p>
                            <p>Day-of-event coordination</p>
                            <p>Budget management and tracking</p>
                            <p>Venue selection and booking</p>
                            <p>Theme development and concept creation</p>
                            <p>Vendor sourcing and managemen</p>
                            <p>RSVP and guest list management</p>
                        </div>
                        <div className="card">
                            <h3>Event Decoration</h3>
                            <p>Venue decor setup and design</p>
                            <p>Tablescapes and centerpiece</p>
                            <p>Floral arrangements and bouquets</p>
                            <p>Lighting design and effects</p>
                            <p>Linen and tableware </p>
                            <p>Balloon decorations</p>
                            <p>Backdrops and photo booth design</p>
                            <p>Drapery and fabric installations</p>
                        </div>
                        <div className="card">
                            <h3>Theme Parties:</h3>
                            <p>Birthday parties</p>
                            <p>Anniversary celebrations</p>
                            <p>Graduation parties</p>
                            <p>Seasonal and holiday-themed events</p>
                            <p>Costume parties</p>
                            <p>Themed corporate events</p>
                        </div>
                        <div className="card">
                            <h3>Wedding Services</h3>
                            <p>Wedding planning and coordination</p>
                            <p>Ceremony and reception decor</p>
                            <p>Bridal bouquet and floral arrangements</p>
                            <p>Wedding arches and chuppahs</p>
                            <p>Wedding favors and gifts</p>
                            <p>Rehearsal dinner plannin</p>
                        </div>
                        <div className="card">
                            <h3>Corporate Events</h3>
                            <p>Product launches</p>
                            <p>Conferences and seminars</p>
                            <p>Gala dinners</p>
                            <p>Team-building events</p>
                            <p>Awards ceremonies</p>
                            <p>Corporate holiday parties</p>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default ServicesComponent;