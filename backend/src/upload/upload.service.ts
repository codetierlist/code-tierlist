import { Injectable } from '@nestjs/common';
import { TestCase } from 'src/types';

@Injectable()
export class UploadService {
  constructor() {}

  async runTestAgainstSolution() {}

  async createTestCase(): Promise<TestCase> {
    return {
      id: 1,
      input: 'some test files all in one here',
    };
  }
}
