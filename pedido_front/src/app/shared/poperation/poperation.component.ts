import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, PElement } from 'src/app/views/home/home.component';

@Component({
  selector: 'app-poperation',
  templateUrl: './poperation.component.html',
  styleUrls: ['./poperation.component.scss']
})
export class POperationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<POperationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PElement) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

  
  
}
