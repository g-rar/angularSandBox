import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valeria',
  templateUrl: './valeria.component.html',
  styleUrls: ['./valeria.component.css']
})
export class ValeriaComponent implements OnInit {
  //Titulo
  tittles: "Practica de mis Componentes";
  isCollapsed:boolean = true;
  inputText:string = "";
  longCalculator: string[] = ['AC','CE'];
  buttonsCalculator: string[] = ['7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+'];

  constructor() {
  }

  buttonCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }

}
