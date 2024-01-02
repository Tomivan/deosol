import React from 'react';
import Packages from '../../assets/images/packages.jpg';
import Background from '../../assets/images/background.jpg';
import './packages.component.css';

const PackagesComponent = () => {
    return(
        <div className='packages'>
            <img src={Background} className='background' />
            <h2>Packages</h2>
            <div className="card fade-bottom">
            <img src={Packages} alt="" />
                <div className="text">
                    <p>Common wdding hall packages and what they include:</p>
                    <ol>
                        <li>
                            <h3>Basic package</h3>
                            <p><strong>Price range:</strong>350,000 - 450,000 Naira</p>
                            -Bridal chair and table
                            -Chair and table covers
                            -Table centerpieces
                            -Stage setup and flowers including 
                            -Walkway props and backdrop
                            -Drapery and styling
                            -Stage lights
                        </li>
                        <li>
                            <h3>Medium package</h3>
                            <p><strong>Price range:</strong>450,000 - 600,000 Naira</p>
                            -It comes with everything in the Basic package plus:
                            -Smoke effects
                            -Fireworks
                            -Flowers at other places aside the stage
                            -Fog
                        </li>
                        <li>
                            <h3>Luxe package</h3>
                            <p><strong>Price range:</strong>650,000 and above</p>
                            -It  comes with everything in the Medium package plus:
                            -Ceremony archway (popular at beach weddings, can be decorated with flowers or drapery materials)
                            -Hanging lanterns with LED lights
                            -Table runners etc.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default PackagesComponent;