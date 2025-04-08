import React, { useState } from 'react';
import { CategoryType, SeverityType, CATEGORIES, SEVERITIES } from '@/types/event';

interface EventFormProps {
  onAddEvent: (event: {
    description: string;
    reporter: string;
    category: CategoryType;
    severity: SeverityType;
  }) => void;
}

export function EventForm({ onAddEvent }: EventFormProps) {
  const [description, setDescription] = useState('');
  const [reporter, setReporter] = useState('');
  const [category, setCategory] = useState<CategoryType>('Medical');
  const [severity, setSeverity] = useState<SeverityType>('Medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!description.trim() || !reporter.trim()) {
      return;
    }
    
    onAddEvent({
      description,
      reporter,
      category,
      severity,
    });
    
    // Reset form
    setDescription('');
    setReporter('');
    setCategory('Medical');
    setSeverity('Medium');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">Add New Event</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter event description"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="reporter" className="block text-sm font-medium text-gray-700 mb-1">
            Reporter
          </label>
          <input
            type="text"
            id="reporter"
            value={reporter}
            onChange={(e) => setReporter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Who reported this event?"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value as CategoryType)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.emoji} {cat.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="severity" className="block text-sm font-medium text-gray-700 mb-1">
              Severity
            </label>
            <select
              id="severity"
              value={severity}
              onChange={(e) => setSeverity(e.target.value as SeverityType)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {SEVERITIES.map((sev) => (
                <option key={sev.value} value={sev.value}>
                  {sev.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
} 