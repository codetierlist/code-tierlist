export enum UserRole {
  INSTRUCTOR = 'instructor',
  STUDENT = 'student',
}

export interface User {
  email: string;
  username: string;
  avatar: string;
  role: UserRole;
  mostRecentSubmission: string;
}

export interface Assignment {
  name: string;
  description: string;
  solution: string;
}

export interface TestCase {
  id: number;
  input: string;
}

export enum TestResultStatus {
  SUCCESS = 'success',
  INCORRECT_OUTPUT = 'incorrect-output',
  RUNTIME_ERROR = 'runtime-error',
  TIMEOUT = 'timeout',
  COMPILATION_ERROR = 'compilation-error',
}

export interface TestResult {
  id: number;
  status: TestResultStatus;
  timestamp: Date;
}
