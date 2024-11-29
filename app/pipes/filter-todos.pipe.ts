import { Pipe, PipeTransform } from '@angular/core';
import { Task, StatusTask } from '../interfaces/todo.interface';

@Pipe({
  name: 'filterTodos',
  pure: false, // Recalcular automáticamente con cada cambio
})
export class FilterTodosPipe implements PipeTransform {
  transform(tasks: Task[], status: StatusTask): Task[] {
    if (!tasks || !status) {
      return tasks; 
    }
    return tasks.filter(task => task.status === status);
  }
}
