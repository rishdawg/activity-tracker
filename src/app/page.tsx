'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Event } from '@/types/event';
import { Timeline } from '@/components/timeline/timeline';
import { EventForm } from '@/components/event-form';
import { sampleEvents } from '@/data/sample-events';

export default function Home() {
  const [events, setEvents] = useState<Event[]>(sampleEvents);

  const handleAddEvent = (newEvent: Omit<Event, 'id' | 'date'>) => {
    const event: Event = {
      ...newEvent,
      id: uuidv4(),
      date: new Date(),
    };
    
    setEvents((prevEvents) => [event, ...prevEvents]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Activity Tracker</h1>
          <p className="text-gray-600">Track important events for schizophrenia management</p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* <EventForm onAddEvent={handleAddEvent} /> */}
          <Timeline events={events} title="Event History" />
        </div>
      </div>
    </div>
  );
}
