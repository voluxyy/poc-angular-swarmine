import { Component } from '@angular/core';
import { GridsterComponentInterface, GridsterConfig, GridsterItem, GridsterItemComponentInterface } from 'angular-gridster2';

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

  static eventStart(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent): void {
	console.info('eventStart', item, itemComponent, event);
  }

  static eventStop(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent): void {
	console.info('eventStop', item, itemComponent, event);
  }

  static overlapEvent(source: GridsterItem, target: GridsterItem, grid?:GridsterComponentInterface):void {
	console.log('overlap', source, target, grid);
  }

  constructor() {
    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
    ];

	this.options = {
		itemChangeCallback: AppComponent.itemChange,
		itemResizeCallback: AppComponent.itemResize,
		pushItems: false,
		draggable: {
			delayStart: 0,
			enabled: true,
			ignoreContent: false,
			stop: AppComponent.eventStop,
			start: AppComponent.eventStart,
			dropOverItems: false,
			dropOverItemsCallback: AppComponent.overlapEvent,
		  },
	  };
  }

  changedOptions() {
      (this.options.api as any).optionsChanged();
  }

  removeItem(item: any) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({
      x: 0,
      y: 0,
      rows: 2,
      cols: 1,
    });
  }

  showStat() {
    console.info(this.dashboard)
  }

  read() {
    let input = document.getElementById("userInput")?.textContent
	console.info(input)
  }
}
