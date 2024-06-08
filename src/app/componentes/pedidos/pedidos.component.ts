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

  // ngOnInit(): void {
  //   // Obtener los reportes de ventas, ya sea del localStorage o de un servicio
  //   const reportesGuardados = localStorage.getItem('reportes');
  //   this.reportes = reportesGuardados ? JSON.parse(reportesGuardados) : [];
  // }

  ngOnInit(): void {
    // Datos iniciales de ejemplo
    const initialReportes = [
      {
        fecha: "2024-06-08T00:54:48.775Z",
        productosVendidos: [
          {
            imagen1: "assets/images/producto6/1.jpg",
            imagen2: "assets/images/producto6/2.jpg",
            imagen3: "assets/images/producto6/3.jpg",
            imagen4: "assets/images/producto6/4.jpg",
            descripcion: "Pastel Signo Geminis",
            precio: 495,
            cantidad: 1
          },
          {
            imagen1: "assets/images/producto5/1.jpg",
            imagen2: "assets/images/producto5/2.jpg",
            imagen3: "assets/images/producto5/3.jpg",
            imagen4: "assets/images/producto5/4.jpg",
            descripcion: "Ramo de Gerberas Amarillas",
            precio: 440,
            cantidad: 1
          }
        ],
        nombreComprador: "Aaron",
        correoComprador: "aaron_lopez222@hotmail.com",
        telefonoComprador: 4493877845,
        direccionComprador: "Fovissste ojo de Agua",
        totalVenta: 935
      },
      {
        fecha: "2024-06-08T00:55:21.967Z",
        productosVendidos: [
          {
            imagen1: "assets/images/producto1/1.jpg",
            imagen2: "assets/images/producto1/2.jpg",
            imagen3: "assets/images/producto1/3.jpg",
            imagen4: "assets/images/producto1/4.jpg",
            descripcion: "8 Rosas y Mini Rosas en Jarrón",
            precio: 250,
            cantidad: 1
          },
          {
            imagen1: "assets/images/producto7/1.jpg",
            imagen2: "assets/images/producto7/2.jpg",
            imagen3: "assets/images/producto7/3.jpg",
            imagen4: "assets/images/producto7/4.jpg",
            descripcion: "Planta del Éxito en Maceta Cerámica",
            precio: 280,
            cantidad: 1
          },
          {
            imagen1: "assets/images/producto9/1.jpg",
            imagen2: "assets/images/producto9/2.jpg",
            imagen3: "assets/images/producto9/3.jpg",
            imagen4: "assets/images/producto9/4.jpg",
            descripcion: "Personaliza tu Globo Burbuja Arcoiris",
            precio: 95,
            cantidad: 1
          }
        ],
        nombreComprador: "Nadia",
        correoComprador: "Nadia@hotmail.com",
        telefonoComprador: 5537241826,
        direccionComprador: "Calle vanlentin Gomez Farias 509",
        totalVenta: 625
      },
      {
        fecha: "2024-06-08T00:55:51.385Z",
        productosVendidos: [
          {
            imagen1: "assets/images/producto6/1.jpg",
            imagen2: "assets/images/producto6/2.jpg",
            imagen3: "assets/images/producto6/3.jpg",
            imagen4: "assets/images/producto6/4.jpg",
            descripcion: "Pastel Signo Geminis",
            precio: 495,
            cantidad: 1
          },
          {
            imagen1: "assets/images/producto9/1.jpg",
            imagen2: "assets/images/producto9/2.jpg",
            imagen3: "assets/images/producto9/3.jpg",
            imagen4: "assets/images/producto9/4.jpg",
            descripcion: "Personaliza tu Globo Burbuja Arcoiris",
            precio: 95,
            cantidad: 1
          },
          {
            imagen1: "assets/images/producto10/1.jpg",
            imagen2: "assets/images/producto10/2.jpg",
            imagen3: "assets/images/producto10/3.jpg",
            imagen4: "assets/images/producto10/4.jpg",
            descripcion: "Planta Anturio en Maceta de Plumas",
            precio: 350,
            cantidad: 1
          }
        ],
        nombreComprador: "Paola",
        correoComprador: "Paola@hotmail.com",
        telefonoComprador: 4493821743,
        direccionComprador: "Alonso de Aragon",
        totalVenta: 940
      }
    ];

    // Obtener los reportes de ventas del localStorage
    const reportesGuardados = localStorage.getItem('reportes');
    
    if (reportesGuardados) {
      this.reportes = JSON.parse(reportesGuardados);
    } else {
      this.reportes = initialReportes;
      localStorage.setItem('reportes', JSON.stringify(this.reportes));
    }
  }

}
