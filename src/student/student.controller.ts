import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
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
  @Put(':id')
    async update(
    @Param('id') id: number,
    @Body() updateData: Partial<Student>,
    ): Promise<Student> {
    return this.studentService.updateStudent(id, updateData);
  }

  @Delete(':id')
async delete(@Param('id') id: number): Promise<void> {
  return this.studentService.deleteStudent(id);
}
}
