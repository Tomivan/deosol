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
                        <li>Event Planning:
                            Full event planning and coordination
                            Partial event planning (assisting with specific aspects)
                            Day-of event coordination
                            Budget management and tracking
                            Venue selection and booking
                            Theme development and concept creation
                            Vendor sourcing and management
                            RSVP and guest list management
                        </li>
                        <li>Event Decoration:
                            Venue decor setup and design
                            Tablescapes and centerpieces
                            Floral arrangements and bouquets
                            Lighting design and effects
                            Linen and tableware selection
                            Balloon decorations
                            Backdrops and photo booth design
                            Drapery and fabric installations
                        </li>
                        <li>Theme Parties:
                            Birthday parties
                            Anniversary celebrations
                            Graduation parties
                            Seasonal and holiday-themed events
                            Costume parties
                            Themed corporate events
                        </li>
                        <li>Wedding Services:
                            Wedding planning and coordination
                            Ceremony and reception decor
                            Bridal bouquet and floral arrangements
                            Wedding arches and chuppahs
                            Wedding favors and gifts
                            Rehearsal dinner planning
                        </li>
                        <li>Corporate Events:
                            Product launches
                            Conferences and seminars
                            Gala dinners
                            Team-building events
                            Awards ceremonies
                            Corporate holiday parties
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ServicesComponent;