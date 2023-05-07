import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ItemComponent } from "./item.component";
import { ListComponent } from "./list.component";
import { NbcharPipe } from "./nbchar.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [ ItemComponent, ListComponent, NbcharPipe],
  exports: [ListComponent]
})
export class LegacyModule {}