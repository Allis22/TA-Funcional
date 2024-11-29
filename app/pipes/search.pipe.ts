import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/todo.interface';

@Pipe({
  name: 'search',
  pure: false, 
})
export class SearchPipe implements PipeTransform {
  transform(tasks: Task[], searchTerm: string): Task[] {
    if (!tasks || !searchTerm) {
      return tasks;
    }
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    return tasks.filter(task =>
      task.title.toLowerCase().includes(normalizedSearchTerm)
    );
  }
}