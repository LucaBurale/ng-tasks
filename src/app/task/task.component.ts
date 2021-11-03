import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() text: string= '';
  @Input() completed: boolean= false;


  constructor() { }

  ngOnInit(): void {
  }

}
