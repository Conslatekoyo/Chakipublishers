import React from 'react';
import './style.css';
import EventsAtom from '../Atoms/events';

const Events = () => {
  return (
    <div>
      <h1 className="events-title" id="events">Our Work</h1>
      <div className='events' >
        <EventsAtom
          imageUrl="images/green.jpg"
          h1="From a Street Kid to a CEO by Antony Cyrus"
          text="This project showcases our holistic publishing approach. We transformed Antony Cyrus's inspiring journey into a compelling book through thorough editing, captivating design, and global distribution across platforms."
        />
        <EventsAtom
          imageUrl="images/awareness.jpg"
          h1="Made for Perpetual Honeymoon by Rev. Dr. John B.K. Murimi"
          text="We emphasized digital accessibility by distributing Rev. Dr. John B.K. Murimi's eBook across multiple platforms, showcasing our adaptability to authors' needs. Our ongoing partnership extended to two additional titles, reflecting our commitment to fostering lasting relationships with authors."
        />
      </div>
    </div>
  );
}

export default Events;
