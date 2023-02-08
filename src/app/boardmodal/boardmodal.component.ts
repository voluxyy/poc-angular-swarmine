import { Component } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-boardmodal',
  templateUrl: './boardmodal.component.html',
  styleUrls: ['./boardmodal.component.css']
})
export class BoardmodalComponent {
  constructor(public dialogRef: MatDialogRef<BoardmodalComponent>) {}
}
