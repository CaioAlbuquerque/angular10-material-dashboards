import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {

  alvarasMesData = [
    { name: "Jan20", value: 8050 },
    { name: "Fev20", value: 4503 },
    { name: "Mar20", value: 3503 }
  ];

  alvarasStatusData = [
    { name: "Pago", value: 1050 },
    { name: "Pago Parcial", value: 4503 },
    { name: "Cancelado", value: 3706 },
    { name: "Finalizado", value: 2855 },
    { name: "Assinado", value: 4501 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
