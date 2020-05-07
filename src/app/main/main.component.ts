import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  resultado = "<p>Lo introducido no es un palíndromo</p>";
  inputValue = "Hola Amigos :D";

  ngOnInit() {
  }

  onInput(value: string){
    value = value.trim();
    for (let i = 0; i < Math.floor(value.length/2) ; i++) {
      if(value[i] !== value[value.length-1-i]){
        this.resultado = "<p>Lo introducido no es un palíndromo</p>";
        return;
      }
    }
    this.resultado = "<p>Eso sí es un palídromo :D</p>"
  }

}
