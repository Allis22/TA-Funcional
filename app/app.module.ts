import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TaskFormComponent } from './components/task-form/task-form.component'; 
import { FilterTodosPipe } from './pipes/filter-todos.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,     
    TodoComponent,     
    TaskFormComponent,  
    FilterTodosPipe, SearchPipe   
  ],
  imports: [
    BrowserModule,      
    FormsModule,       
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }