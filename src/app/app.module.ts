import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MayFormComponent } from './may-form/may-form.component';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatBottomSheetModule,
  MatListModule,
} from '@angular/material';

import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyFromSheetComponent } from './siedeNavComponents/my-from-sheet/my-from-sheet.component';
import { MyNetworksSheetComponent } from './siedeNavComponents/my-networks-sheet/my-networks-sheet.component';
import { MyNetworksAndConnectionsComponent } from './siedeNavComponents/my-networks-and-connections/my-networks-and-connections.component';
import { SewersComponent } from './siedeNavComponents/sewers/sewers.component';
import { ContactComponent } from './siedeNavComponents/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MayFormComponent,
    HeaderComponent,
    MyFromSheetComponent,
    MyNetworksSheetComponent,
    MyNetworksAndConnectionsComponent,
    SewersComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatBottomSheetModule,
    MatListModule
  ],
  providers: [],
  entryComponents: [MyFromSheetComponent,
    MyNetworksAndConnectionsComponent,
    MyNetworksSheetComponent,
    SewersComponent,
    ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
