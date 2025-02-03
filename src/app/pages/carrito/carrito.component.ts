import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
  standalone: false // ✅ Aseguramos que no sea standalone
})
export class CarritoComponent implements OnInit {
  carrito: any[] = []; // ✅ Declaramos la propiedad carrito para evitar el error

  constructor() {}

  ngOnInit(): void {
    // Aquí podríamos obtener el carrito desde un servicio en el futuro
    this.carrito = [
      { nombre: 'Camiseta de Maldini', precio: 79.99 },
      { nombre: 'Camiseta de Zidane', precio: 89.99 }
    ];
  }
}
