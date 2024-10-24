// SafeZones.js
import React from 'react';
import './SafeZones.css';

function SafeZones() {
    return (
        <div className="rules-section">
            <h1 className = "rules-header">SAFE ZONES</h1>
            
            <section className= "things-to-know-content">
                <h2>RESIDENCES</h2>
                <p>Humans cannot be tagged inside their own room/apartment unless they invite the zombie in themselves. KILLS FROM FORCEFUL ENTRIES WILL NOT COUNT (e.g., either forcing into someone's room or forcing a roommate to open their door via threats or being excessively annoying).</p>
                <ul>
                    <li>Roommates may not invite zombies in to kill their roommates.</li>
                    <li><strong>Hall Style Dorms:</strong> Only your room is safe; dorm halls and common areas (lounge rooms, study rooms, etc.) are fair game.</li>
                    <li><strong>Apartments/Houses/Suite-Style Dorms:</strong> You are safe if both feet are inside your apartment/house/unit.</li>
                </ul>
                <p>When entering someone's household, you must have permission from someone who lives there, and they must be present. If not, they must notify all members of their household, who must acknowledge and accept the visitor at least 10 minutes prior to their arrival.</p>
            </section>

            <section>
                <h2>CLASSES</h2>
                <p>There will be NO BRAIN-EATING DURING CLASS.</p>
                <ul>
                    <li>A classroom is only a safe zone 10 minutes before the class starts, during the class, and 10 minutes after it ends. (Only inside the classroom)</li>
                    <li>Use your cellphones for the official time → <strong>HONOR CODE</strong>.</li>
                    <li>Do not attack someone speaking with a professor or TA!</li>
                    <li>Bathrooms are not intended as hiding places. Please do not force us to implement a time limit rule!</li>
                </ul>
                <p>Humans cannot be tagged while at work (job, volunteering, TAing). Concessions also count as work!</p>
            </section>

            <section>
                <h2>GYM</h2>
                <ul>
                    <li>The gym becomes a safe zone once you swipe in, but only while actively working out. You are not safe outside the swiped area.</li>
                    <li>Sports/dance practices and required meetings are safe in the designated meeting area 10 minutes before and after the scheduled time.</li>
                    <li>For all dance practices at AFC/Slaughter/MEM, you are safe 10 minutes before and after your scheduled practice in the room where your practice is scheduled.</li>
                    <li><strong>Important:</strong> Simply swiping into the gym doesn’t make you safe unless you are actively working out. Hiding in the AFC is prohibited and may result in disqualification.</li>
                </ul>
            </section>

            <section>
                <h2>CSA EVENTS</h2>
                <p>CSA events (e.g., officer meetings, sporting events, official family events) are safe. However, only the event area is safe for 10 minutes before and after the event.</p>
                <ul>
                    <li>Traveling to and from the event is not safe, so plan your route wisely!</li>
                    <li>Only family members are safe at family events. Non-family participants do not receive safety benefits.</li>
                    <li>Family events require at least 5 people, including a guardian and one family member. If attendance drops below 5, it is no longer a family event, and safety rules do not apply.</li>
                </ul>
                <p>For meals at family events, participants are not required to walk or wait in line together but must sit together while eating.</p>
                <p>Official CSA activities like chalking, talking, and flyering are safe.</p>
                <p>Participants are also safe when using transportation (driving, biking, on a bus, skateboarding, etc.).</p>
            </section>

            <section>
                <h2>EXTERNAL CIO EVENTS</h2>
                <p>External CIO events follow the same rules as classes. The event location is safe during the event and 10 minutes before and after. However, traveling to and from the event is not safe.</p>
                <p>Example: If Yafu has a non-CSA dance practice in AFC MP3 from 8pm to 10pm, she is only safe in MP3 from 7:50pm to 10:10pm. She can be tagged anywhere else in the AFC outside of that window.</p>
                <p>If you want to adjust the bounds of the safe zones, please contact all comm chairs: <strong>Brian Xu, Dylan Lee, and Yafu Xu</strong>.</p>

                <h3>APEX Dance Crew Safe Zone</h3>
                <p>Wednesday 6pm-8pm and Thursday 8pm-10pm: The entire AFC basement is safe.</p>
            </section>
        </div>
    );
}

export default SafeZones;
