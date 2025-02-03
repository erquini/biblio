import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../../services/camiseta.service';
import { Camiseta } from '../../models/camiseta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false // ✅ Asegurar que no es standalone
})
export class HomeComponent implements OnInit {
  camisetas: Camiseta[] = []; // ✅ Declaramos correctamente la propiedad camisetas

  constructor(private camisetaService: CamisetaService) {}

  ngOnInit(): void {
    this.camisetas = this.camisetaService.getCamisetas();
  }
}

