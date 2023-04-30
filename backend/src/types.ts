export enum UserRole {
  INSTRUCTOR = 'instructor',
  STUDENT = 'student',
}

export interface User {
  email: string;
  password: string;
  avatar?: string;
  role: UserRole;
}

export interface Assignment {
  name: string;
  description?: string;
  solution: string;
}

export interface TestCase {
  id: number;
  input: string;
}

export interface TestResult {
  submission: string;
  numPassed: number;
  numTests: number;
  timestamp: Date;
}
