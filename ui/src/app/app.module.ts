import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy, NgClass, NgForOf, NgIf} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from './layout/app.layout.module';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {ProductService} from './demo/service/product.service';
import {CountryService} from './demo/service/country.service';
import {CustomerService} from './demo/service/customer.service';
import {EventService} from './demo/service/event.service';
import {IconService} from './demo/service/icon.service';
import {NodeService} from './demo/service/node.service';
import {PhotoService} from './demo/service/photo.service';
import {ButtonModule} from "primeng/button";
import {InputSwitchModule} from "primeng/inputswitch";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
  ],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    ButtonModule,
    InputSwitchModule,
    NgForOf,
    NgIf,
    RadioButtonModule,
    NgClass,
    FormsModule,
    DialogModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
