import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RubricaPage } from './rubrica/rubrica.page';
import { TabContattiComponent } from './tab-contatti/tab-contatti.component';
import { TabDettagliComponent } from './tab-dettagli/tab-dettagli.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormsModule } from '@angular/forms';
import { PersonClass } from './person/person.class';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    RubricaPage,
    TabContattiComponent,
    TabDettagliComponent,
    FormInputComponent,
    PersonClass,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
