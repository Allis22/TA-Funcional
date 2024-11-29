import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private tasks: Task[] = [
    { id: 1, title: 'Go Home', description: 'It is almost time to go', status: 'To Do' },
    { id: 2, title: 'Finish the homework', description: 'You can do it', status: 'In Progress' },
    { id: 3, title: 'Cook', description: 'Good job', status: 'Done' },
  ];

  // Observable para gestionar cambios en la lista de tareas
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  constructor() {}

  // Obtener todas las tareas como Observable
  get(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  // Obtener una tarea por ID
  getOne(taskId: number): Observable<Task | undefined> {
    const task = this.tasks.find((t) => t.id === taskId);
    return new BehaviorSubject(task).asObservable();
  }

  // Agregar una nueva tarea
  add(task: Task): void {
    task.id = this.tasks.length > 0 ? Math.max(...this.tasks.map((t) => t.id)) + 1 : 1; // Genera un ID único
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks); // Notifica los cambios
  }

  // Eliminar una tarea por ID
  delete(taskId: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
    this.tasksSubject.next(this.tasks); // Notifica los cambios
  }

  // Actualizar una tarea existente
  update(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;  // Reemplazar la tarea con los nuevos datos
    }
  }
}