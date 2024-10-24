import React, { useEffect, useState } from 'react';
import './Home.css';
import Rules from '../Rules/Rules.js';

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const currentYear = new Date().getFullYear();
    const [dates, setDates] = useState({ monday: '', friday: '' });

    useEffect(() => {
        const { monday, friday } = getMondayAndFridayBeforeHalloween(currentYear);
        setDates({ monday: formatDate(monday), friday: formatDate(friday) });
    }, [currentYear]);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const imagePositions = [
        { top: '0', left: '0' },
        { top: '50px', left: '10%' },
        { top: '80px', left: '90%' },
        { top: '50px', right: '10%' },
        { top: '100px', left: '30%' },
        { top: '150px', right: '20%' },
    ];

    return (
        <div id="home" className="home-scrolljack-container">
            <div className="home-scrolljack-container--inner">
                <section id="home--inner">
                    <div id="society">
                        <div id="landing-page-layers">
                            {['bridge.png', 'bridge.png', 'bridge.png', 'bridge.png'].map((id, index) => (
                                <img
                                    key={id + index}
                                    id={id}
                                    src={`/${id}`}
                                    alt={id.replace('-', ' ')}
                                    style={{
                                        position: 'absolute',
                                        ...imagePositions[index],
                                        transform: `translate3d(0px, ${scrollY * (index + 0.2)}px, 0px)`,
                                        opacity: 1 - scrollY / 1000,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <div className="png-container">
                    <img src="/pvz_note.png" alt="Wood Panel" className="background-png" />
                    <div className="home-container">
                        <h1>WELCOME TO </h1>
                        <h1> CSA HVZ {currentYear} !</h1>
                        <p>
                            <span className="first-line">
                                Here's your chance to eat the brains of your enemies and bring honor to your family!
                            </span>
                            <br />
                            <span className="second-line">
                                {dates.monday} 12:00 AM - {dates.friday} 3:00 PM EST
                            </span>
                        </p>
                    </div>
                </div>
                <div style={{ height: '150vh' }}></div>

                <section className="rules-section">
                    <Rules />
                </section>
            </div>
        </div>
    );
};

export default Home;

const getMondayAndFridayBeforeHalloween = (year) => {
    const halloween = new Date(year, 9, 31);
    const dayOfWeek = halloween.getDay();
    let daysBack = dayOfWeek === 0 ? 5 : dayOfWeek === 6 ? 4 : dayOfWeek + 6;

    const monday = new Date(halloween);
    monday.setDate(halloween.getDate() - daysBack);

    const friday = new Date(monday);
    friday.setDate(monday.getDate() + 4);

    return { monday, friday };
};

const formatDate = (date) =>
    `${date.toLocaleString('default', { weekday: 'long' })}, ${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`;
