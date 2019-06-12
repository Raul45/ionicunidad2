import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {
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
selectedPath='';
  constructor(private router: Router, private menuCrtl: MenuController) {
    this.router.events.subscribe((event: RouterEvent) =>{
    this.selectedPath = event.url;
    });
   }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCrtl.toggle();
  }

}

interface Componente{
  nombre:string;
  icono:string;
  url:string;
}