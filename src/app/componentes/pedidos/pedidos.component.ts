import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit {
  reportes: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Obtener los reportes de ventas, ya sea del localStorage o de un servicio
    const reportesGuardados = localStorage.getItem('reportes');
    this.reportes = reportesGuardados ? JSON.parse(reportesGuardados) : [];
  }
}
