// src/Rules.js
import React from 'react';
import './Rules.css';

function Rules() {
    return (
        <section className="rules-section">
            <h2 className="rules-header">THINGS TO NOTE</h2>
            <div className="things-to-know-content">
                <p>
                    There is no due process of law. Community Chairs are <strong>judge, jury, and executioner</strong>.
                    All decisions are final. Excessive debating or arguing may result in point deductions from your family.
                </p>
                <p>
                    Read <strong>ALL</strong> rules thoroughly before contacting us. Misunderstandings of clearly outlined rules may result 
                    in point deductions for wasting time.
                </p>
                <p>
                    Use common sense. Stay safe and avoid putting others or yourself in danger. This game is meant to be fun for everyone.
                </p>
                <p>
                    Questions? Contact us at: <a href="mailto:community.csa@gmail.com">community.csa@gmail.com</a>.
                </p>
                <p>
                    Any edits to the rules will be posted in the HvZ Facebook group during the game.
                </p>
                <p className="honor-code">HONOR CODE APPLIES.</p>
            </div>
        </section>
    );
}

export default Rules;
