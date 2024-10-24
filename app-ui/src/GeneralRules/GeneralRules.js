import React from 'react';
import './GeneralRules.css';

function GeneralRules() {
    return (
        <section className="rules-section">
            <h2 className="rules-header">GENERAL RULES</h2>
            <div className="things-to-know-content">
                <p>
                    Each family will start with <span className="highlight">three</span> zombies. Only participating family members will know the identities 
                    of these zombies. Designated Messenger group chats will be used for communication among players.
                </p>
                <p>
                    Zombies must wear socks on both hands to make a kill, and both socks must be on fully. A two-hand 
                    sock touch in contact with any extension of the human body (any clothes, backpack, etc. that the human is currently wearing)
                    is required for a successful kill, but not something they are holding dangling from their hands (shopping bag, etc.).
                    </p>
                    <p>
                    Humans turn into zombies the day <strong>after</strong> they are tagged. 
                    For example, if DYLAN is killed on the 22nd at 12:01 AM, then he will not be a zombie until 12:00 AM on the 23rd.
                    </p>
                <p>
                    Humans can stun zombies for 15 minutes by throwing a sock and making direct contact to anything being worn/person, but zombies can block stuns with items held in both hands (e.g. umbrella, book).
                    NOTE: The zombie does not have to be attacking the human. As long as the human knows that the person is a zombie, the human may stun the zombie.
                </p>
                <p>
                    Respect others' privacy and follow safe zone rules. Tasks and kills completed each day must be submitted <strong> before 11:59 PM on the day of completion </strong>
                    to earn points, with video evidence preferred for kills.
                </p>
                <p>
                    <strong>All disputes must be filed within 1 hour of the event.</strong> COMM's decision is final regarding any disputes.
                </p>
            </div>
        </section>
    );
}

export default GeneralRules;
