import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root', // Replace with your DB username
    password: 'password', // Replace with your DB password
    database: 'studentdb', // Replace with your DB name
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // Auto-creates tables; disable in production
  }),
    TypeOrmModule.forFeature([Student]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
