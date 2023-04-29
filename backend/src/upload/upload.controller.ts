import { Body, Controller, Param, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
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
  @UseInterceptors(FilesInterceptor('files'))
  async addTest(
    @Param('assignmentId') assignmentId: string,
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<TestCase> {
    const allTests = this.uploadService.getContentFromAllFiles(files);
    await this.uploadService.runTestAgainstSolution();
    return this.uploadService.createTestCase();
  }

  @Post('code/:assignmentId')
  @UseInterceptors(FilesInterceptor('files'))
  async testCode(
    @Param('assignmentId') assignmentId: string,
    @UploadedFiles() files: Express.Multer.File[],
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
