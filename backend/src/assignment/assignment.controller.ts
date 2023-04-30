import { Request, Body, Controller, Get, Post, UseGuards, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Assignment, UserRole } from 'src/types';

interface AssignmentInfo {
  name: string;
  description?: string;
  numTests: number;
}

@UseGuards(JwtAuthGuard)
@Controller('assignments')
export class AssignmentController {
  /**
   * Create a new assignment.
   * @Param body The assignment to create. (name and soltuion)
   * @returns The created assignment.
  */
  @UseGuards(RolesGuard)
  @Roles(UserRole.INSTRUCTOR)
  @Post('')
  async createAssignment(
    @Body() body: Assignment,
  ): Promise<Assignment> {
    return body;
  }

  /**
   * Get all assignments.
   * @returns All assignments.
  */
  @Get('')
  async getAssignments(): Promise<AssignmentInfo[]> {
    return [
      {
        name: 'CSC148-A1',
        description: 'Introduction to suffering',
        numTests: 2,
      },
    ];
  }

  /**
   * Get a specific assignment.
   * @Param assignmentId The assignment to get.
   * @returns The assignment.
   * @throws 404 if the assignment does not exist.
   */
  @Get(':assignmentId')
  async getAssignment(
    @Param('assignmentId') assignmentId: string,
  ): Promise<AssignmentInfo> {
    return {
      name: assignmentId,
      description: 'Introduction to suffering',
      numTests: 2,
    };
  }
}
