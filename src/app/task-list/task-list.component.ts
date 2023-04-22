import { Component } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  
  constructor(){ }

  tasks: Task[] = []

  add(newTask: string){
    this.tasks.push(new Task(newTask));
  }

  remove(existingTask: Task){
    var userConfirmed = confirm(`Are you sure you want to remove this task: ${existingTask.title}`)
    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }

  toggleIsDone(task: Task){
    task.isDone = !task.isDone;
  }
}

class Task{
  constructor(public title: string){
    
  }
  toggleIsDone(){
    this.isDone = !this.isDone;
  }
  public isDone = false;
}
