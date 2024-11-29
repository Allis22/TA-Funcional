import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Task, StatusTask } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Output() submitTask = new EventEmitter<Task>();

  formGroup: FormGroup<{
    title: FormControl<string>;
    description: FormControl<string>;
    status: FormControl<StatusTask>;
  }>;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.nonNullable.group({
      title: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(3)]),
      description: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(5)]),
      status: this.fb.nonNullable.control('To Do' as StatusTask, Validators.required),
    });
  }

  addTask(): void {
    if (this.formGroup.valid) {
      const newTask: Task = {
        id: 0, 
        title: this.formGroup.get('title')!.value,
        description: this.formGroup.get('description')!.value,
        status: this.formGroup.get('status')!.value,
      };
      this.submitTask.emit(newTask);
      this.formGroup.reset({ status: 'To Do' }); 
    }
  }
}
