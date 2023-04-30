import { Body, Controller, Get, Post } from '@nestjs/common';
import { Assignment } from 'src/types';

interface AssignmentInfo {
  name: string;
  description: string;
  numTests: number;
}

@Controller('assignments')
export class AssignmentController {
  @Post('')
  /**
   * Create a new assignment.
   * @Param body The assignment to create. (name and soltuion)
   * @returns The created assignment.
   */
  async createAssignment(
    @Body() body: Assignment,
  ): Promise<Assignment> {
    return body;
  }

  @Get('')
  /**
   * Get all assignments.
   * @returns All assignments.
  */
  async getAssignments(): Promise<AssignmentInfo[]> {
    return [
      {
        name: 'CSC148-A1',
        description: 'Introduction to suffering',
        numTests: 2,
      },
    ];
  }
}
