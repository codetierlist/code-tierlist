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
        name: "CSC148 A2",
        numTests: 150,
        description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
      },
      {
        name: "CSC236 A1",
        numTests: 51,
        description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
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
