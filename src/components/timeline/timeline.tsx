import React from 'react';
import { Event, CategoryType, SeverityType, CATEGORIES, SEVERITIES } from '@/types/event';
import { TimelineEvent } from './timeline-event';

interface TimelineProps {
  events: Event[];
  title?: string;
}

export function Timeline({ events, title = 'Timeline' }: TimelineProps) {
  // Sort events by date (newest first)
  const sortedEvents = [...events].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        
        <div className="mt-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Categories:</h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <span 
                  key={category.value} 
                  className={`inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium ${
                    category.value === 'Medical' ? 'bg-blue-100 text-blue-800' :
                    category.value === 'Employment' ? 'bg-purple-100 text-purple-800' :
                    category.value === 'Behavior' ? 'bg-yellow-100 text-yellow-800' :
                    category.value === 'Communication' ? 'bg-teal-100 text-teal-800' :
                    category.value === 'Emotional' ? 'bg-orange-100 text-orange-800' :
                    category.value === 'Cognitive' ? 'bg-pink-100 text-pink-800' :
                    category.value === 'Positive' ? 'bg-green-100 text-green-800' :
                    category.value === 'Functional' ? 'bg-gray-100 text-gray-800' : ''
                  }`}
                >
                  <span className="mr-1">{category.emoji}</span> {category.label}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Severity:</h3>
            <div className="flex gap-4">
              {SEVERITIES.map((severity) => (
                <div key={severity.value} className="flex items-center">
                  <div className={`${severity.value === 'High' ? 'bg-red-500' : 
                                     severity.value === 'Medium' ? 'bg-orange-500' : 
                                     'bg-green-500'} w-3 h-3 rounded-full mr-2`}>
                  </div>
                  <span className={severity.color}>{severity.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        {sortedEvents.map((event) => (
          <TimelineEvent key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
} 