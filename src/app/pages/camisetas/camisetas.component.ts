import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../../services/camiseta.service';
import { Camiseta } from '../../models/camiseta';

@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.scss'],
  standalone: false // ✅ Asegurar que el componente no sea standalone
})
export class CamisetasComponent implements OnInit {
  camisetas: Camiseta[] = []; // ✅ Declaramos correctamente la propiedad camisetas

  constructor(private camisetaService: CamisetaService) {}

  ngOnInit(): void {
    this.camisetas = this.camisetaService.getCamisetas();
  }
}
