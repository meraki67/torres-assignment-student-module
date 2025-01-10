import { Controller, Post, Body, Get } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() studentData: Partial<Student>): Promise<Student> {
    return this.studentService.createStudent(studentData);
  }

  @Get()
    async findAll(): Promise<Student[]> {
    return this.studentService.getAllStudents();
    }
}
