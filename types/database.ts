export type UserRole = 'student' | 'teacher' | 'admin';
export type ContentStatus = 'draft' | 'published' | 'archived';
export type ContentType = 'reader' | 'video' | 'slides';

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  avatar_id: string;
  total_xp: number;
  current_level: number;
  created_at: string;
  updated_at: string;
}

export interface Class {
  id: string;
  teacher_id: string;
  name: string;
  description: string | null;
  code: string;
  school_year: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Lesson {
  id: string;
  unit_id: string;
  title: string;
  description: string | null;
  content_type: ContentType;
  order_index: number;
  status: ContentStatus;
  xp_reward: number;
  estimated_minutes: number | null;
  created_at: string;
  updated_at: string;
}

export interface LessonProgress {
  id: string;
  student_id: string;
  lesson_id: string;
  status: 'not_started' | 'in_progress' | 'completed';
  progress_percent: number;
  started_at: string | null;
  completed_at: string | null;
  total_time_seconds: number;
}

export interface XPTransaction {
  id: string;
  student_id: string;
  amount: number;
  reason: string;
  source_type: string | null;
  source_id: string | null;
  created_at: string;
}