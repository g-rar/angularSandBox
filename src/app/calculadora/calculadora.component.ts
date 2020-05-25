import { Component, OnInit } from '@angular/core';
import {CalculadoraService} from '../services/calculadora.service'

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  //Variable de entrada salida
  private displayText :string;
  private textIsResult = false;

  constructor(private calculadora:CalculadoraService) {
    this.displayText = '';
   }

  private keyPressed(key){
    //si el texto es resultado de una operación limpia la pantalla
    if(this.textIsResult){
      this.ac();
      this.textIsResult = false;
    }
    this.displayText += key;
  }

  //borra el ultimo caracter de la pantalla
  private del(){
    //si el texto es resultado de una operación limpia la pantalla
    if(this.textIsResult){
      this.ac();
      this.textIsResult = false;
    }
    this.displayText =  this.displayText.slice(0, -1);
  }

  //limpia la pantalla
  private ac() {
    this.textIsResult = false;
    this.displayText = '';
  }

  //realiza el cálculo
  private calculate() {
    //bandera para la limpieza de la pantalla
    this.textIsResult = true;
    this.displayText = this.calculadora.calculate(this.displayText);
  }
  ngOnInit() {
  }
}
