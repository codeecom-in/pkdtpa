import React from 'react';
// import { useLanguage } from '../context/LanguageContext';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';
import './Sponsors.css';

function Sponsors() {
    const scrollRef = useGSAPAnimations();

    return (
        <div className="sponsors-page" ref={scrollRef}>
            <header className="sponsors-hero">
                <h1>Our Sponsors</h1>
                <p>Supporting our community's growth and vision</p>
            </header>

            <div className="sponsors-container">



                 <section className="sponsors-message" onClick={() => window.open('https://www.codeecom.in', '_blank')}>
                    <p className='codee'>This website is designed and developed by </p>
                    <h2 className='codee'>&lt;<span className='code'>code</span><span className='ecom'>ecom</span>&gt;</h2>
                </section>
                <section className="sponsors-message">
                    <h2>Currently No Other Active Sponsors</h2>
                    <p>We are looking for partners to support our upcoming community events and initiatives.</p>
                </section>
                <section className="sponsors-message">
                    <h2>SPONSOR YOUR AD HERE</h2>
                    <p>Contact committee for place your advertisements here</p>
                </section>
               
            </div>
        </div>
    );
}

export default Sponsors;
