import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-my-from-sheet',
  templateUrl: './my-from-sheet.component.html',
  styleUrls: ['./my-from-sheet.component.css']
})
export class MyFromSheetComponent {

  constructor(private bottomSheetR: MatBottomSheetRef<MyFromSheetComponent>) { }

  /*openLink(event: MouseEvent): void {
    this.bottomSheetR.dismiss();
    event.preventDefault();
  }*/
}
