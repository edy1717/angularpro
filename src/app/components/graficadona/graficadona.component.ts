import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graficadona',
  templateUrl: './graficadona.component.html',
  styles: []
})
export class GraficadonaComponent implements OnInit {

  @Input ('labels') public doughnutChartLabels: Label[] = [];
  @Input ('data') public doughnutChartData: MultiDataSet = [ [] ];
  @Input ('chtype') public doughnutChartType: ChartType = 'doughnut';


  constructor() { }

  ngOnInit() {
  }

}
