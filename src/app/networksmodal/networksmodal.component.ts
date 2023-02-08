import { Component } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-networksmodal',
  templateUrl: './networksmodal.component.html',
  styleUrls: ['./networksmodal.component.css']
})
export class NetworksmodalComponent {
  constructor(public dialogRef: MatDialogRef<NetworksmodalComponent>) {}
}
