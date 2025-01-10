import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/student.entity';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root', // Replace with your DB username
    password: 'admin123', // Replace with your DB password
    database: 'student_db', // Replace with your DB name
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // Auto-creates tables; disable in production
  }),
    TypeOrmModule.forFeature([Student]),
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
