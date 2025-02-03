import { Injectable } from '@angular/core';
import { Camiseta } from '../models/camiseta';

@Injectable({
  providedIn: 'root'
})
export class CamisetaService {
  private camisetas: Camiseta[] = [
    {
      id: 1,
      nombre: 'Camiseta de Maldini',
      equipo: 'AC Milan',
      temporada: '2006/2007',
      imagen: 'assets/maldini_2006.jpg',
      precio: 79.99,
      descripcion: 'La icónica camiseta del Milan usada por Maldini en la temporada 2006/07.'
    },
    {
      id: 2,
      nombre: 'Camiseta de Zidane',
      equipo: 'Real Madrid',
      temporada: '2001/2002',
      imagen: 'assets/zidane_2002.jpg',
      precio: 89.99,
      descripcion: 'Camiseta legendaria de Zidane en la final de la Champions League 2002.'
    }
  ];

  constructor() { }

  getCamisetas(): Camiseta[] {
    return this.camisetas;
  }
}
