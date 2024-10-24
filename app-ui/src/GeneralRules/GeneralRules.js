import React from 'react';
import './GeneralRules.css';

function GeneralRules() {
    return (
        <section className="rules-section">
            <h2 className="rules-header">General Rules</h2>
            <div className="things-to-know-content">
                <p><strong>GENERAL RULES</strong></p>
                <p>
                    Each family will start with three zombies. Only participating family members will know the identities 
                    of these zombies. Designated Messenger group chats will be used for communication among players.
                </p>
                <p>
                    Zombies must wear socks on both hands to make a kill, and both socks must be on fully. A two-hand 
                    sock touch is required for a successful kill. Humans turn into zombies the day after they are tagged.
                </p>
                <p>
                    Humans can stun zombies for 15 minutes by throwing a sock, but zombies can block stuns with items held in both hands.
                </p>
                <p>
                    Respect others' privacy and follow safe zone rules. Tasks completed each day must be submitted before 11:59 PM 
                    to earn points, with video evidence preferred for kills.
                </p>
                <p>
                    **All disputes must be filed within 1 hour of the event.** COMM's decision is final regarding any disputes.
                </p>
            </div>
        </section>
    );
}

export default GeneralRules;
