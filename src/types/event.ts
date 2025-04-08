export type CategoryType = 
  | 'Medical' 
  | 'Employment' 
  | 'Behavior' 
  | 'Communication' 
  | 'Emotional' 
  | 'Cognitive' 
  | 'Positive' 
  | 'Functional';

export type SeverityType = 'High' | 'Medium' | 'Low';

export interface Event {
  id: string;
  date: Date;
  description: string;
  reporter: string;
  category: CategoryType;
  severity: SeverityType;
}

export const CATEGORIES: { value: CategoryType; label: string; emoji: string }[] = [
  { value: 'Medical', label: 'Medical', emoji: '💊' },
  { value: 'Employment', label: 'Employment', emoji: '💼' },
  { value: 'Behavior', label: 'Behavior', emoji: '👤' },
  { value: 'Communication', label: 'Communication', emoji: '💬' },
  { value: 'Emotional', label: 'Emotional', emoji: '😢' },
  { value: 'Cognitive', label: 'Cognitive', emoji: '🧠' },
  { value: 'Positive', label: 'Positive', emoji: '✅' },
  { value: 'Functional', label: 'Functional', emoji: '🔧' },
];

export const SEVERITIES: { value: SeverityType; label: string; color: string }[] = [
  { value: 'High', label: 'High', color: 'text-red-500' },
  { value: 'Medium', label: 'Medium', color: 'text-orange-500' },
  { value: 'Low', label: 'Low', color: 'text-green-500' },
]; 