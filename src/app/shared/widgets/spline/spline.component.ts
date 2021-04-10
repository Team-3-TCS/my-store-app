import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-spline',
  templateUrl: './spline.component.html',
  styleUrls: ['./spline.component.css'],
})
export class SplineComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'VENTAS POR MESES',
      },
      subtitle: {
        text: 'RESUMEN DE LAS VENTAS POR MESES',
      },
      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        title: {
          text: 'Total de ventas por mes',
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: 'S/.{point.y:.2f}',
          },
        },
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>S/.{point.y:.2f}</b> en el mes<br/>',
      },

      series: [
        {
          name: 'Ventas',
          colorByPoint: true,
          data: [
            {
              name: 'Enero',
              y: 3000,
              drilldown: 'Enero',
            },
            {
              name: 'Febrero',
              y: 2500,
              drilldown: 'Febrero',
            },
            {
              name: 'Marzo',
              y: 3200,
              drilldown: 'Marzo',
            },
            {
              name: 'Abril',
              y: 120,
              drilldown: 'Abril',
            },
            {
              name: 'Mayo',
              y: 4.02,
              drilldown: 'Mayo',
            },
            {
              name: 'Junio',
              y: 0,
              drilldown: 'Junio',
            },
            {
              name: 'Julio',
              y: 0,
              drilldown: 'Julio',
            },
          ],
        },
      ],
    };
  }
}
