import React from 'react';
import { Link } from 'react-router-dom';
import './Videos.css';

const Videos = () => {

    return (<section id="videos">
        <div className="svg-div rotate" >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="svg">
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" ></path>
        </svg>
        </div>
        <div class="videos-div">
            
                <iframe title="video-pokemon-channel" width="600" height="400" src="https://www.youtube.com/embed/c2edLO4GxGs" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div>
                <h2>Checkout the Official Pókemon YouTube channel</h2>
                <button class="btn-grad"><a href="https://www.youtube.com/user/pokemon">View more</a></button>
            </div>

        </div>
        <div className="svg-div" >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="svg">
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" ></path>
        </svg>
        </div>
        
    </section>)

}

export default Videos;