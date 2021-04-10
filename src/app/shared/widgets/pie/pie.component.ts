import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Mayores ventas por categoria',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [
        {
          name: 'Porcentaje',
          colorByPoint: true,
          data: [
            {
              name: 'Televisores',
              y: 50.5,
              sliced: true,
              selected: true,
            },
            {
              name: 'Lavadoras',
              y: 20.3,
            },
            {
              name: 'Teléfonos móviles',
              y: 10.7,
            },
            {
              name: 'Microondas',
              y: 14.7,
            },
            {
              name: 'Other',
              y: 3.8,
            },
          ],
        },
      ],
    };
  }
}
