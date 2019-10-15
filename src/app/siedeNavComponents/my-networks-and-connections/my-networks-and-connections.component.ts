import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { MyFromSheetComponent } from '../my-from-sheet/my-from-sheet.component';

@Component({
  selector: 'app-my-networks-and-connections',
  templateUrl: './my-networks-and-connections.component.html',
  styleUrls: ['./my-networks-and-connections.component.css']
})
export class MyNetworksAndConnectionsComponent {

  constructor(private bottomSheetR: MatBottomSheetRef<MyNetworksAndConnectionsComponent>) { }

  /*openLink(event: MouseEvent): void {
    this.bottomSheetR.dismiss();
    event.preventDefault();
  }*/

}
