import React from 'react';
import Background from '../../assets/images/background.jpg';
import './packages.component.css';

const PackagesComponent = () => {
    return(
        <div className='packages'>
            <img src={Background} className='background' />
            <h2>Event Packages</h2>
            <div className="section">
                <p>Choose from our curated wedding hall packages:</p> 
                <table>
                    <thead>
                        <tr>
                            <th>Package</th>
                            <th>Feature</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Basic Package</td>
                            <td>
                                <dl>
                                    <li>Bridal chair and table</li>
                                    <li>Chair and table covers</li>
                                    <li>Table centerpieces</li>
                                    <li>Stage setup and flowers including</li>
                                    <li>Walkway props and backdrop</li>
                                    <li>Drapery and styling</li>
                                    <li>Stage lights</li>
                                </dl>
                            </td>
                            <td>350,000 - 450,000</td>
                        </tr>
                        <tr>
                            <td>Medium Package</td>
                            <td>
                                <dl>
                                    <li>Basic package inclusive</li>
                                    <li>Smoke effects</li>
                                    <li>Fireworks</li>
                                    <li>Flowers at other places aside stage</li>
                                    <li>Fog</li>
                                </dl>
                            </td>
                            <td>450,000 - 600,000</td>
                        </tr>
                        <tr>
                            <td>Luxe Package</td>
                            <td>
                                <dl>
                                    <li>Medium package inclusive</li>
                                    <li>Ceremony archway (popular at beach weddings, can be decorated with flowers or drapery materials)</li>
                                    <li>Hanging lanterns with LED lights</li>
                                    <li>Table runners</li>
                                </dl>
                            </td>
                            <td>650,000 and above</td>
                        </tr>
                    </tbody>
                </table>    
            </div>
        </div>
    )
}

export default PackagesComponent;