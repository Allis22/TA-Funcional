export interface Task {
  id: number;
  title: string;
  description: string;
  status: StatusTask; 
}

export type StatusTask = 'To Do' | 'In Progress' | 'Done';