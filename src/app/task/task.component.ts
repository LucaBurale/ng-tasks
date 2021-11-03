import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() text: string= '';
  @Input() completed: boolean= false;
  hidden: boolean = false



  checked(){
    if (this.completed === false){
      this.completed = true
    } else
     {this.completed = false
    }
  }

  hideTask(event: any) {
    event.stopPropagation()
    this.hidden = true
    console.info("Hiding task!", this)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
