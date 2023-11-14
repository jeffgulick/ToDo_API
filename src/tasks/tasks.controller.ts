import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateTask } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  findAll(): string {
    return 'This action returns all tasks';
  }

  @Post()
  create(@Body() createTask: CreateTask): string {
    return 'This action adds a new task';
  }
}
