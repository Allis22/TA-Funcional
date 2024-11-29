import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Task } from './interfaces/todo.interface';
import { TodoService } from './services/todo.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'To-Do List';
  todos: Task[] = [];
  searchTerm: string = '';
  editingTask: Task | null = null;

  constructor(private todoService: TodoService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Cargar las tareas al inicializar el componente
    this.loadTasks();
  }

  loadTasks(): void {
    // Obtener las tareas desde el servicio usando un Observable
    this.todoService.get().subscribe((tasks) => {
      this.todos = tasks;
      this.cdr.detectChanges(); // Asegura que Angular detecte los cambios
    });
  }

  addTask(newTask: Task): void {
    // Agregar la tarea usando el servicio
    this.todoService.add(newTask);
    this.loadTasks(); // Recargar las tareas para reflejar el cambio
  }

  deleteTask(taskId: number): void {
    // Eliminar la tarea usando el servicio
    this.todoService.delete(taskId);
    this.loadTasks(); // Recargar las tareas después de eliminar
  }

  
  startEditing(task: Task): void {
    this.editingTask = { ...task }; // Clonamos la tarea para evitar mutaciones directas
  }

  cancelEditing(): void {
    this.editingTask = null; // Cancelar la edición
  }

  onUpdate(updatedTask: Task): void {
    if (updatedTask) {
      this.todoService.update(updatedTask); // Actualiza la tarea en el servicio
      this.loadTasks(); // Recargar las tareas después de la actualización
      this.editingTask = null; // Restablecer después de la actualización
    }
  }
}
