import { Component, OnInit } from '@angular/core';
import { DataService } from './dataService';
import { Configuration } from '../app.constants';

@Component({
  selector: 'tables-cmp',
  providers: [DataService, Configuration],
  templateUrl: 'tables.component.html',
})

export class TableComponent implements OnInit {
    public discoveryData: any;
    // Progressbar
    public max = 200;
    public showProgressBar: boolean;
    public dynamic = 200;

    constructor(private _dataService: DataService) { }

    ngOnInit() {
      this.showProgressBar = true;
      this.getAllItemsJson();
    }

    public forceDiscovery(): void {
      this.showProgressBar = true;
      this._dataService
            .GetAllForce()
            .subscribe((json: any) => {
            this.discoveryData = json;
            console.log(this.discoveryData);
            this.showProgressBar = false;
        });
    }

    private getAllItemsJson(): void {
        this._dataService
            .GetAll()
            .subscribe((json: any) => {
            console.log(json);
            this.discoveryData = json;
            console.log(this.discoveryData);
            this.showProgressBar = false;
        });
    }
}
