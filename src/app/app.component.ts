import { Component, Input } from '@angular/core';
import { GridsterItem, GridsterConfig } from 'angular-gridster2';
import { MatCommonModule } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  static itemChange(item: any, itemComponent: any) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }

  @Input() userInput!: string;

  constructor() {
    this.options = {
      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize,
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2},
      {cols: 2, rows: 3, y: 0, x: 2},
      {cols: 2, rows: 4, y: 0, x: 2},
    ];
  }

  changedOptions() {
      (this.options.api as any).optionsChanged();
  }

  removeItem(item: any) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(userInput: string) { 
    this.dashboard.push({
      x: 10,
      y: 10,
      rows: 10,
      cols: 10,
    });
  }

  showStat() {
    console.info(this.dashboard)  
  }

  read($userInput: string) {
    var input = $userInput
    console.info(input)
  }
}
