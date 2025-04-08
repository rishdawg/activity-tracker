import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) {
    return 'Today';
  } else if (diffInDays === 1) {
    return 'Yesterday';
  } else if (diffInDays < 7) {
    return 'Recent week';
  } else if (diffInDays < 30) {
    return '~1 month ago';
  } else if (diffInDays < 60) {
    return '~2 months ago';
  } else {
    return `${Math.floor(diffInDays / 30)} months ago`;
  }
}

export function getSeverityColor(severity: string): string {
  switch (severity) {
    case 'High':
      return 'bg-red-500';
    case 'Medium':
      return 'bg-orange-500';
    case 'Low':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
}

export function getCategoryBgColor(category: string): string {
  switch (category) {
    case 'Medical':
      return 'bg-blue-100 text-blue-800';
    case 'Employment':
      return 'bg-purple-100 text-purple-800';
    case 'Behavior':
      return 'bg-yellow-100 text-yellow-800';
    case 'Communication':
      return 'bg-teal-100 text-teal-800';
    case 'Emotional':
      return 'bg-orange-100 text-orange-800';
    case 'Cognitive':
      return 'bg-pink-100 text-pink-800';
    case 'Positive':
      return 'bg-green-100 text-green-800';
    case 'Functional':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function getCategoryEmoji(category: string): string {
  switch (category) {
    case 'Medical':
      return '💊';
    case 'Employment':
      return '💼';
    case 'Behavior':
      return '👤';
    case 'Communication':
      return '💬';
    case 'Emotional':
      return '😢';
    case 'Cognitive':
      return '🧠';
    case 'Positive':
      return '✅';
    case 'Functional':
      return '🔧';
    default:
      return '';
  }
}
