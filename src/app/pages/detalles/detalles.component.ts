import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamisetaService } from '../../services/camiseta.service';
import { Camiseta } from '../../models/camiseta';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  standalone: false // ✅ Asegurar que no es standalone
})
export class DetallesComponent implements OnInit {
  camiseta!: Camiseta; // ✅ Aseguramos que la propiedad existe
  carrito: Camiseta[] = []; // ✅ Declaramos el carrito

  constructor(
    private route: ActivatedRoute,
    private camisetaService: CamisetaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const camisetaEncontrada = this.camisetaService.getCamisetas().find(c => c.id === id);
    
    if (camisetaEncontrada) {
      this.camiseta = camisetaEncontrada;
    } else {
      console.error('Camiseta no encontrada');
    }
  }

  agregarAlCarrito(camiseta: Camiseta): void { 
    this.carrito.push(camiseta); 
    console.log('Camiseta agregada al carrito:', camiseta);
  }
}
