import React from 'react';
import './style.css';
import EventsAtom from '../Atoms/events';

const Events = () => {
  return (
    <div>
      <h1 className="events-title" id="events">Upcoming Events</h1>
      <div className='events' >
        <EventsAtom
          imageUrl="images/green.jpg"
          h1="Green Workshop"
          text="Join us for a workshop on transforming semi-desert regions into green landscapes. Learn about ecosystem restoration, biodiversity, and climate change mitigation."
        />
        <EventsAtom
          imageUrl="images/empowernment.jpg"
          h1="Empowerment Day"
          text="Be part of our Empowerment Day! Collaborate with communities, develop sustainable solutions for clean water, renewable energy, and education."
        />
        <EventsAtom
          imageUrl="images/awareness.jpg"
          h1="Awareness Seminar"
          text="Join our Awareness Symposium to learn about environmental conservation. Engage in educational programs and workshops, contributing to positive change."
        />
      </div>
    </div>
  );
}

export default Events;
