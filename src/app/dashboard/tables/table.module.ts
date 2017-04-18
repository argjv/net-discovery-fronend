import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { TableComponent } from './table.component';

@NgModule({
    imports: [
      RouterModule,
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule
    ],
    declarations: [TableComponent],
    exports: [TableComponent]
})

export class TableModule { }
