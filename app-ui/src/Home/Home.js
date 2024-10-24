import React, { useEffect, useState, useMemo } from 'react';
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

    const generateImagePositions = (count = 10) => {
        const positions = [];
        const verticalStep = window.innerHeight / count;
        const horizontalStep = (window.innerWidth) / (count);

        for (let i = 0; i < count; i++) {
            const top = `${Math.floor(i * verticalStep)}px`;
            const side = i % 2 === 0 ? 'left' : 'right';
            const value = `${Math.floor((i % (count)) * horizontalStep)}px`;

            positions.push({ top, [side]: value });
        }

        for (let i = 0; i < count * 2; i++) {
            const top = `${Math.floor(Math.random() * (window.innerHeight) + 50)}px`;
            const side = i % 2 === 0 ? 'left' : 'right';
            const left = `${Math.floor(Math.random() * window.innerWidth)}px`;

            positions.push({ top, left });
        }

        return positions;
    };

    const imagePositions = useMemo(() => generateImagePositions(), []);

    //feel free to change the images to update theme
    let side_image_list = ['buckethead_zombie.webp', 'peashooter.webp', 'giant_zombie.png',
        'sunflower.png', 'peashooter.webp', 'rocket_zombie.png', 'purple_green_plant.png',
        'ice_pod.png', 'walnut.png', 'corn.png', 'zombie.png', 'bomb.png',
        'swimmer.png', 'jalapeno.png'];

    const doubleAndShuffleList = (list) => {
        const doubledList = [...list, ...list];

        for (let i = doubledList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [doubledList[i], doubledList[j]] = [doubledList[j], doubledList[i]];
        }

        return doubledList;
    };

    side_image_list = useMemo(() => doubleAndShuffleList(side_image_list), []);

    return (
        <div id="home" className="home-scrolljack-container">
            <div className="home-scrolljack-container--inner">
                <section id="home--inner">
                    <div id="society">
                        <div id="landing-page-layers">
                            <img
                                key={0}
                                id={'lawn'}
                                src={`/lawn.png`}
                                alt={'lawn'}
                                style={{
                                    position: 'absolute',
                                    transform: `translate3d(0px, ${scrollY * (0 + 0.2)}px, 0px)`,
                                    opacity: 1 - scrollY / 1000,
                                    width: '100%',  
                                    height: 'auto',
                                    willChange: 'transform',
                                }}
                            />
                            {side_image_list.map((id, index) => (
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
                                        width: '150px',  // Adjust width
                                        height: 'auto',
                                        willChange: 'transform',
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <div className="png-container">
                    <img src="/pvz_note.png" alt="Wood Panel" className="background-png" />
                    <section id="home" className="home-container">
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
                    </section>
                </div>
                <div style={{ height: '150vh' }}></div>

                <section id="rules">
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
