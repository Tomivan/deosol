import React from 'react';
import Logo from '../../assets/images/background.jpg';
import Services from '../../assets/images/deosol-services.jpg';
import './services.component.css'

const ServicesComponent = () => {
    return (
        <div className='services'>
            <img src={Logo} className='background' />
            <h2>Services</h2>
            <div className="card fade-bottom">
                <img src={Services} alt="" />
                <div className="text">
                    <ol>
                        <li>Event Planning:<br />
                            Full event planning and coordination<br />
                            Partial event planning (assisting with specific aspects)<br />
                            Day-of event coordination <br />
                            Budget management and tracking<br />
                            Venue selection and booking<br />
                            Theme development and concept creation<br />
                            Vendor sourcing and management<br />
                            RSVP and guest list management<br />
                        </li>
                        <li>Event Decoration:<br />
                            Venue decor setup and design<br />
                            Tablescapes and centerpieces<br />
                            Floral arrangements and bouquets<br />
                            Lighting design and effects<br />
                            Linen and tableware selection<br />
                            Balloon decorations<br />
                            Backdrops and photo booth design<br />
                            Drapery and fabric installations<br />
                        </li>
                        <li>Theme Parties:<br />
                            Birthday parties<br />
                            Anniversary celebrations<br />
                            Graduation parties<br />
                            Seasonal and holiday-themed events<br />
                            Costume parties<br />
                            Themed corporate events<br />
                        </li>
                        <li>Wedding Services:<br />
                            Wedding planning and coordination<br />
                            Ceremony and reception decor<br />
                            Bridal bouquet and floral arrangements<br />
                            Wedding arches and chuppahs<br />
                            Wedding favors and gifts<br />
                            Rehearsal dinner planning<br />
                        </li>
                        <li>Corporate Events:<br />
                            Product launches<br />
                            Conferences and seminars<br />
                            Gala dinners<br />
                            Team-building events<br />
                            Awards ceremonies<br />
                            Corporate holiday parties<br />
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ServicesComponent;