import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { NetworksmodalComponent } from '../networksmodal/networksmodal.component';
import { BoardmodalComponent } from '../boardmodal/boardmodal.component';

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css'],
})
export class NetworksComponent {
  data:String = '';
  displayValue(event:any){
    this.data = event.target.value;
  }
  changetext: boolean;

  Cloud: string;

  constructor(public dialog: MatDialog, ) {
    this.changetext = false;

    this.Cloud = '';
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, modalType: string): void {
    if(modalType == "Networks") {
      this.dialog.open(NetworksmodalComponent, {
        width: '600px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }
    if(modalType == "Board") {
      this.dialog.open(BoardmodalComponent, {
        width: '600px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }
  }
}
