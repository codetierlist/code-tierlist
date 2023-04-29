import { Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Assignment } from 'src/types';

interface AssignmentInfo {
  name: string;
  description: string;
  numTests: number;
}

@Controller('analytics')
export class AnalyticsController {
  @Post('assignments')
  @UseInterceptors(FilesInterceptor('files'))
  async createAssignment(
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<Assignment> {
    return {
      name: 'assignment1',
      description: 'assignment1 description',
      solution: 'solution1 file',
    };
  }

  @Get('assignments')
  async getAssignments(): Promise<AssignmentInfo[]> {
    return [
      {
        name: 'assignment1',
        description: 'assignment1 description',
        numTests: 2,
      },
    ];
  }
}
