import { Injectable } from '@nestjs/common';
import { Task } from './Interfaces/task.interface';

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [
    {
      id: '1',
      name: 'Task One',
      description: 'Description One',
      important: true,
    },
    {
      id: '2',
      name: 'Task Two',
      description: 'Description Two',
      important: false,
    },
    {
      id: '3',
      name: 'Task Three',
      description: 'Description Three',
      important: true,
    },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
