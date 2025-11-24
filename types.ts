
export type ScreenName =
  | 'onboarding' | 'login' | 'register'
  | 'dashboard' | 'phase-timeline' | 'phase-details'
  | 'new-claim' | 'claim-detail'
  | 'documents' | 'document-upload' | 'document-viewer'
  | 'contractors' | 'contractor-detail'
  | 'deadlines'
  | 'form-builder' | 'form-submission'
  | 'insurance-info'
  | 'resources'
  | 'profile'
  | 'notifications'
  | 'admin-users' | 'admin-dashboard'
  | 'forum-feed' | 'forum-post' | 'forum-create-post';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'USER' | 'ADMIN';
  currentPhase: number;
}

export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
  status: 'completed' | 'in-progress' | 'not-started';
  due?: string;
}

export interface Phase {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  progress: number;
  tasks: Task[];
}

export interface Contractor {
  id: string;
  name: string;
  specialty: string;
  phone: string;
  email: string;
  status: 'pending' | 'selected' | 'active' | 'completed';
  rating: number;
  bidAmount?: number;
  licenseNumber?: string;
}

export interface Deadline {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  isCompleted: boolean;
}

export interface ForumPost {
  id: string;
  author: string;
  phaseTag?: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  timeAgo: string;
  category: 'Support' | 'Insurance' | 'Repairs' | 'General';
}