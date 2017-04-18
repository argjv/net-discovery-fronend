import { Component, OnInit} from '@angular/core';
import { DataService } from './chart.service';
import { Configuration } from '../app.constants';

declare var $: any;

@Component({
  selector: 'chart-cmp',
  providers: [DataService, Configuration],
  templateUrl: 'chart.component.html'
})

export class ChartComponent implements OnInit {
  public metricsData: any;
  public showProgress1Bar: boolean;

  public metrics2Data: any;
  public showProgress2Bar: boolean;

  public metrics3Data: any;
  public showProgress3Bar: boolean;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.showProgress1Bar = true;
    this.showProgress2Bar = true;
    this.showProgress3Bar = true;
    this.getAllItemsJson();
  }

  private getAllItemsJson(): void {
      this._dataService
          .Get()
          .subscribe((json: any) => {
          console.log(json);
          this.metricsData = json;
          this.loadCharts();
          this.showProgress1Bar = false;
      });
    this._dataService
          .GetChart2()
          .subscribe((json: any) => {
          console.log(json);
          this.metrics2Data = json;
          this.loadChart2();
          this.showProgress2Bar = false;
      });
    this._dataService
          .GetChart3()
          .subscribe((json: any) => {
          console.log(json);
          this.metrics3Data = json;
          this.loadChart3();
          this.showProgress3Bar = false;
      });
  }

  loadCharts() {
    let areaChart: any = $('#area-chart');
    areaChart.highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: 'Protocols usage'
      },
      xAxis: {
          categories: ['ICMP', 'SNMP', 'DNS']
      },
      credits: {
          enabled: false
      },
      series: this.metricsData
  });
  }

  loadChart2() {
    let totalFruit: any = $('#total-fruit');
    totalFruit.highcharts({
        chart: {
            type: 'column'
        },

        title: {
            text: 'Success date per operation'
        },

        xAxis: {
            categories: ['ICMP', 'SNMP', 'DNS']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of operations'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: this.metrics2Data,
    });
  }
    loadChart3() {
    let snowDepth: any = $('#snow-depth');
    snowDepth.highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Average discovery time over time'
        },
        xAxis: {
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Time in seconds'
            },
            min: 0
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

        series: this.metrics3Data,
    });
  }
}
