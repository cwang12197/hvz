// src/Home.js
import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const currentYear = new Date().getFullYear(); // Get current year from system date
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

    return (
        <div id="home" className="home-scrolljack-container">
            <div className="home-scrolljack-container--inner">
                <section id="home--inner">
                    <div id="society">
                        <div id="landing-page-layers">
                            {[
                                'bridge.png',
                                'bridge.png',
                                'bridge.png',
                                'bridge.png',
                            ].map((id, index) => (
                                <img
                                    key={id}
                                    id={id}
                                    src={`${id}`}
                                    alt={id.replace('-', ' ')}
                                    style={{
                                        transform: `translate3d(0px, ${scrollY * (index + 0.2)}px, 0px)`,
                                        opacity: 1 - scrollY / 1000,
                                    }}
                                    className={id === 'wood-panel' ? 'abs-horizontal-center abs-top' : ''}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <div className="home-wrapper">
                    <div className="home-container">
                        <h1>Welcome to CSA HVZ {currentYear}!</h1>
                        <div style={{ textAlign: 'center', marginTop: '50px' }}>
                            <p>Here's your chance to eat the brains of your enemies and bring honor to your family!</p>
                            <p>{dates.monday} 12:00 AM - {dates.friday} 3:00 PM EST </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

const getMondayAndFridayBeforeHalloween = (year) => {
    const halloween = new Date(year, 9, 31); // October 31st
    const dayOfWeek = halloween.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    let daysBack;

    if (dayOfWeek === 0) {
        daysBack = 5; // If Sunday, go 5 days back
    } else if (dayOfWeek === 6) {
        daysBack = 4; // If Saturday, go 4 days back
    } else {
        daysBack = dayOfWeek + 6; // If Monday-Friday, go 6-11 days back
    }

    // Find the Monday before Halloween
    const mondayBeforeHalloween = new Date(halloween);
    mondayBeforeHalloween.setDate(halloween.getDate() - daysBack);

    // Find the corresponding Friday (same week)
    const fridayBeforeHalloween = new Date(mondayBeforeHalloween);
    fridayBeforeHalloween.setDate(mondayBeforeHalloween.getDate() + 4); // Add 4 days to get Friday

    return { monday: mondayBeforeHalloween, friday: fridayBeforeHalloween };
};

// Function to format a single date
const formatDate = (date) => {
    return `${date.toLocaleString('default', { weekday: 'long' })}, ${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`;
};
