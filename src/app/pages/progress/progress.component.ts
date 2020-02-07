
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

progreso1 : number =77;
progreso2 : number =27;

  constructor() { }

  ngOnInit() {
  }  
}
