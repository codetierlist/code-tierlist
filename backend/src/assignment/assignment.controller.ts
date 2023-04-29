import { Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Assignment } from 'src/types';

interface AssignmentInfo {
  name: string;
  description: string;
  numTests: number;
}

@Controller('assignment')
export class AssignmentController {
  @Post('assignments')
  @UseInterceptors(FilesInterceptor('files'))
  async createAssignment(
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<Assignment> {
    return {
      name: 'CSC148-A1',
      description: 'Introduction to suffering',
      solution: 'solution1 file but actually a string',
    };
  }

  @Get('assignments')
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
