import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task, StatusTask } from '../../interfaces/todo.interface';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() status!: StatusTask;
  @Input() id!: number;
  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<Task>();

  onDelete(): void {
    this.deleteTask.emit(this.id);
  }

  onEdit(): void {
    this.editTask.emit({ title: this.title, description: this.description, status: this.status, id: this.id });
  }
}