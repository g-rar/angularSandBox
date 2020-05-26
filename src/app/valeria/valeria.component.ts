import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valeria',
  templateUrl: './valeria.component.html',
  styleUrls: ['./valeria.component.css'],
  animations: []
})
export class ValeriaComponent implements OnInit {
  //Titulo
  tittles: "Practica de mis Componentes";
  isCollapsed:boolean = true;
  inputText:string = "";

  constructor() {
  }

  buttonCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }

}
