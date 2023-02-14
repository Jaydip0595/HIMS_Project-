import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralModule } from './general/general.module';
import { LoginComponent } from './login/login.component';
import { MasterModule } from './master/master.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    GeneralModule,
    MasterModule
  ],
  exports:[
  HeaderComponent,
  FooterComponent,
  SidebarComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
