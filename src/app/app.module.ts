import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LegacyModule } from "./legacy/legacy.module";

@NgModule({
  imports: [BrowserModule, LegacyModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}