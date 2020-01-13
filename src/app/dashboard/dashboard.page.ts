import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Meus Pedidos',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Promoções',
      url: '/list',
      icon: 'list'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
