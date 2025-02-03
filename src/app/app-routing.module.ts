import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CamisetasComponent } from './pages/camisetas/camisetas.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'camisetas', component: CamisetasComponent },
  { path: 'detalles/:id', component: DetallesComponent },  // 👈 Asegúrate de que esta línea esté bien escrita
  { path: 'carrito', component: CarritoComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
