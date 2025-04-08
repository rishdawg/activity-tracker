import React from 'react';
import { Event } from '@/types/event';
import { formatRelativeTime, getSeverityColor, getCategoryBgColor, getCategoryEmoji } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface TimelineEventProps {
  event: Event;
}

export function TimelineEvent({ event }: TimelineEventProps) {
  const severityColor = getSeverityColor(event.severity);
  const formattedDate = formatRelativeTime(event.date);
  const categoryBgColor = getCategoryBgColor(event.category);
  const categoryEmoji = getCategoryEmoji(event.category);
  
  return (
    <div className="flex items-start mb-4">
      <div className={`${severityColor} w-4 h-4 rounded-full mt-1 mr-4 flex-shrink-0`}></div>
      <Card className="w-full">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">{formattedDate}</span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryBgColor}`}>
                <span className="mr-1">{categoryEmoji}</span>
                {event.category}
              </span>
            </div>
          </div>
          <p className="text-base font-medium">{event.description}</p>
          <p className="text-sm text-gray-500 mt-1">Reported by: {event.reporter}</p>
        </CardContent>
      </Card>
    </div>
  );
} 