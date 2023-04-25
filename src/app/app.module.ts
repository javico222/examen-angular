import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaExamenComponent } from './components/pantalla-examen/pantalla-examen.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [
    AppComponent,
    PantallaExamenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ToastModule,
    PanelModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
