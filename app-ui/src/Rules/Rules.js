// src/Rules.js
import React from 'react';
import './Rules.css';

const Rules = () => {
    return (
        <div className="rules-container">
            <h2>Game Rules</h2>
            <ul>
                <li>Rule 1: Don't get tagged by zombies!</li>
                <li>Rule 2: Humans must use their socks to defend.</li>
                <li>Rule 3: Zombies must tag humans to convert them.</li>
                <li>Rule 4: Follow all safety guidelines on campus.</li>
            </ul>
        </div>
    );
};

export default Rules;
