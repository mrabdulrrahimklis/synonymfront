import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { V1Component } from "./Components/v1/v1.component";
import { V2Component } from "./Components/v2/v2.component";
import { HomeComponent } from "./Components/home/home.component";

// HTTP Client module
import { HttpClientModule } from "@angular/common/http";

// search module
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, V1Component, V2Component, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
