import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createStudent(studentData: Partial<Student>): Promise<Student> {
    const student = this.studentRepository.create(studentData);
    return await this.studentRepository.save(student);
  }

  async getAllStudents(): Promise<Student[]> {
    return await this.studentRepository.find();
  }
  
  async updateStudent(id: number, updateData: Partial<Student>): Promise<Student> {
    await this.studentRepository.update(id, updateData);
    return this.studentRepository.findOneBy({ id });
  }
}
