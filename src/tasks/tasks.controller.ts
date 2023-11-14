import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTask } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './Interfaces/task.interface';
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param() param): Task {
    return this.tasksService.findOne(param.id);
  }

  @Post()
  create(@Body() createTask: CreateTask): string {
    return `Name: ${createTask.name} Desc: ${createTask.description} Important: ${createTask.important}`;
  }

  @Delete(':id')
  delete(@Param() param): string {
    return `Delete ${param.id}`;
  }

  @Put(':id')
  update(@Body() updateTask: CreateTask, @Param('id') param): string {
    return `Update ${param.id} - Name: ${updateTask.name} Desc: ${updateTask.description} Important: ${updateTask.important}`;
  }
}
