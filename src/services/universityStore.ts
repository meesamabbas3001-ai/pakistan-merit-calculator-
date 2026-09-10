import { University, ProgramProfile } from '../types';
import { UNIVERSITIES_DATA as INITIAL_UNIVERSITIES } from '../data/universities';

export interface AdminInquiry {
  id: string;
  university: string;
  program: string;
  session: string;
  question: string;
  contactInfo: string;
  date: string;
  status: 'Pending' | 'Resolved' | 'Archived';
  adminNotes?: string;
}

export interface UpdateHistoryItem {
  id: string;
  universityId: string;
  universityName: string;
  programName?: string;
  fieldChanged: string;
  previousValue: string;
  newValue: string;
  updatedAt: string;
  session: string;
  status: string;
}

const STORAGE_KEY = 'pakistan_merit_universities_v2';
const INQUIRIES_KEY = 'pakistan_merit_admin_inquiries_v2';
const HISTORY_KEY = 'pakistan_merit_update_history_v2';

export function getStoredUniversities(): University[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load stored universities', e);
  }
  return INITIAL_UNIVERSITIES;
}

export function saveUniversities(universities: University[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(universities));
  } catch (e) {
    console.error('Failed to save universities', e);
  }
}

export function getStoredInquiries(): AdminInquiry[] {
  try {
    const saved = localStorage.getItem(INQUIRIES_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load stored inquiries', e);
  }
  return [
    {
      id: 'inq-1',
      university: 'NUST',
      program: 'BS Artificial Intelligence',
      session: 'Fall 2026',
      question: 'What is the exact closing merit and tuition fee for BS AI in 2026?',
      contactInfo: 'student@example.com',
      date: '2026-09-09',
      status: 'Pending',
    },
    {
      id: 'inq-2',
      university: 'FAST-NUCES',
      program: 'BS Cyber Security',
      session: 'Fall 2026',
      question: 'Does FAST offer hostel accommodation for female students at Lahore campus?',
      contactInfo: '0300-9876543',
      date: '2026-09-08',
      status: 'Pending',
    }
  ];
}

export function saveInquiries(inquiries: AdminInquiry[]): void {
  try {
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(inquiries));
  } catch (e) {
    console.error('Failed to save inquiries', e);
  }
}

export function getStoredHistory(): UpdateHistoryItem[] {
  try {
    const saved = localStorage.getItem(HISTORY_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load history', e);
  }
  return [
    {
      id: 'hist-1',
      universityId: 'nust',
      universityName: 'National University of Sciences and Technology',
      programName: 'Engineering Programs',
      fieldChanged: 'Closing Merit 2025',
      previousValue: '70.50',
      newValue: '72.40',
      updatedAt: '2026-09-01',
      session: 'Fall 2026',
      status: 'Verified',
    }
  ];
}

export function saveHistory(history: UpdateHistoryItem[]): void {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (e) {
    console.error('Failed to save history', e);
  }
}

export function addInquiry(inquiry: Omit<AdminInquiry, 'id' | 'date' | 'status'>): AdminInquiry {
  const inquiries = getStoredInquiries();
  const newInq: AdminInquiry = {
    ...inquiry,
    id: `inq-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    status: 'Pending',
  };
  inquiries.unshift(newInq);
  saveInquiries(inquiries);
  return newInq;
}
