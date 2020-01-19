import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

import { MaterialModule } from "./material-module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from "@angular/forms";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

import { RouterModule, Routes } from "@angular/router";
import { StoreComponent } from "./store/store.component";
import { VoterComponent } from "./voter/voter.component";

const appRoutes: Routes = [
  { path: "cart", component: ShoppingCartComponent },
  { path: "store", component: StoreComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SidenavComponent,
    ShoppingCartComponent,
    StoreComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
