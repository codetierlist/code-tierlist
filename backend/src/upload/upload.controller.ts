import { Body, Controller, Param, Post } from '@nestjs/common';
import { TestCase } from 'src/types';
import { UploadService } from './upload.service';

interface Result {
  avatar: string;
  numPassed: number;
  numTests: number;
}

@Controller('upload')
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
  ) {}

  @Post('tests/:assignmentId')
  /**
   * Add a test to the assignment.
   * @Param body The test to add.
   * @returns The created test.
   */
  async addTest(
    @Param('assignmentId') assignmentId: string,
    @Body() body: { testInput: string },
  ): Promise<TestCase> {
    await this.uploadService.runTestAgainstSolution();
    return this.uploadService.createTestCase();
  }

  @Post('code/:assignmentId')
  /**
   * Test the code against the solution.
   * @Param body The code to test.
   * @returns The results of the test for everyone
   */
  async testCode(
    @Param('assignmentId') assignmentId: string,
    @Body() body: { submission: string },
  ): Promise<Result[]> {
    return [
      {
        avatar: 'https://docs.nestjs.com/assets/logo-small.svg',
        numPassed: 1,
        numTests: 2,
      },
      {
        avatar: 'https://drive.google.com/file/d/1PJBCYqy8th4j7wV5y-ubs2BcCcwsKA_B/view?usp=sharing',
        numPassed: 2,
        numTests: 2,
      }
    ];
  }
}
