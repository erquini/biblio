import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component'; // ✅ Importar el navbar
import { HomeComponent } from './pages/home/home.component';
import { CamisetasComponent } from './pages/camisetas/camisetas.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, // ✅ Agregado aquí
    HomeComponent,
    CamisetasComponent,
    DetallesComponent,
    CarritoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
