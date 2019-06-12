import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  componentes: Componente[]=[
    {
    nombre:"modal",
      icono:"logo-windows",
      url:"/modal"
  },
{
  nombre:"grid",
  icono:"grid",
  url:"/grid"
},
{
  nombre:'infinite',
  icono:'infinite',
  url:'/infinite'
},{
  nombre:'loading',
  icono:'clock',
  url:'/loadin'
},{
nombre:'popover',
icono:'thunderstorm',
url:'/popover'
},
{
  nombre:'inputs',
  icono:'information-circle-outline',
  url:'/input'
  }
];
  constructor() { }

  ngOnInit() {}

}
interface Componente{
  nombre:string;
  icono:string;
  url:string;
}