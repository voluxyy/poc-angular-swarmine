import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';

// Angular Gridster2
import { GridsterModule } from 'angular-gridster2';

// Page
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BKeyAdapterComponent } from './b-key-adapter/b-key-adapter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NetworksComponent } from './networks/networks.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    BoardComponent,
    BKeyAdapterComponent,
    PageNotFoundComponent,
    NetworksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCommonModule,
    RouterModule.forRoot([
      { path: "", component: NetworksComponent},
      { path: "networks", component: NetworksComponent},
      { path: "board", component: BoardComponent },
      { path: "bkeyadapter", component: BKeyAdapterComponent },
      // {path: 'bkeyadapter', component: BKeyAdapterComponent},
      // {path: '', redirectTo:'board', pathMatch:'full'},
      { path: '**', component: PageNotFoundComponent },
    ]),
    GridsterModule,
  ],
})
export class AppModule { }
