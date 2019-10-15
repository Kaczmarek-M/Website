import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MyFromSheetComponent } from 'src/app/siedeNavComponents/my-from-sheet/my-from-sheet.component' ;
import { MyNetworksAndConnectionsComponent } from '../siedeNavComponents/my-networks-and-connections/my-networks-and-connections.component';
import { MyNetworksSheetComponent } from '../siedeNavComponents/my-networks-sheet/my-networks-sheet.component';
import { SewersComponent } from '../siedeNavComponents/sewers/sewers.component';
import { ContactComponent } from '../siedeNavComponents/contact/contact.component';

@Component({
  selector: 'app-may-form',
  templateUrl: './may-form.component.html',
  styleUrls: ['./may-form.component.css']
})
export class MayFormComponent implements OnInit {
  opened = false;
  events = [];
  mode = new FormControl('over');

  constructor(private bottomSheet: MatBottomSheet) { }
  open(): void {
    this.bottomSheet.open(MyFromSheetComponent);
  }
  networksAndConnections(): void {
    this.bottomSheet.open(MyNetworksAndConnectionsComponent);
  }
  networks(): void {
    this.bottomSheet.open(MyNetworksSheetComponent);
  }
  sewers(): void {
    this.bottomSheet.open(SewersComponent);
  }
  contact(): void {
    this.bottomSheet.open(ContactComponent);
  }
  ngOnInit() {
  }
}
