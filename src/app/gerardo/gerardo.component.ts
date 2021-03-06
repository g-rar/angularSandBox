import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { stringify } from 'querystring';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-gerardo',
  templateUrl: './gerardo.component.html',
  styleUrls: ['./gerardo.component.css']
})
export class GerardoComponent implements OnInit {

  resultadoPal1 :string;
  resultadoPal2 :string;
  inputPal2: string;
  regPersonaForm;
  saludoPersona = "Todavia hay que añadir el saludo.";
  showSVG = false;
  numberOptions = Array.from(Array(27).keys());
  numberSelected = 0;
  amountArray = [];

  constructor(private formBuilder :FormBuilder, private util:UtilService) {
    this.regPersonaForm = formBuilder.group({
      nombre:"",
      apellidos:"",
      edad:"",
      ciudad:"",
      sexo:""
    })
  }

  ngOnInit() {
  }

  onInput(inputValue){
    this.resultadoPal1 = this.util.esPalindromo(inputValue) ? "Eso sí es un palíndromo :D" : "Eso no es un palindromo.";
  }

  checkPal2(){
    this.resultadoPal2 = this.util.esPalindromo(this.inputPal2) ? "Eso sí es un palíndromo :D" : "Eso no es un palindromo.";
  }

  submitRegPersona(formData){
    let letraGen :string;
    if(formData.sexo === "hombre"){
      letraGen = "o"
    } else if (formData.sexo === "mujer"){
      letraGen = "a"
    } else {
      letraGen = "e"
    }
    this.saludoPersona = `Hola ${formData.nombre}, un gusto conocerl${letraGen}.`;
  }

  btnPressed(){
    this.showSVG = true;
  }

  btnReleased(){
    this.showSVG = false;
  }

  onChange(value){
    let num: number = value as number;
    this.amountArray = [];
    for (let i = 0; i < num; i++) {
      this.amountArray.push(i)
    }
  }
}
