import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gabycp',
  templateUrl: './gabycp.component.html',
  styleUrls: ['./gabycp.component.css']
})
export class GabycpComponent implements OnInit {
  resultado = "Lo introducido no es un palíndromo";  //en el html se accesa aqui con {{resultado}}
  inputValue = "Hola Mundo";
  registrationForm = {};
  nombre = "";
  apellido = "";
  genero = "Hombre";

  constructor(private formBuilder:FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      nombre: "",
      apellido: "",
      genero: "Hombre"
    })
   }

  ngOnInit() {
  }

  onInput(){
    //     La idea es cambiar la propiedad resultado. Los cambio a esa propiedad
    //     Se veran reflejados automáticamente en el html
    let value = this.inputValue;
    
    if(this.esPalindromo(value)){
      this.resultado = "Eso sí es un palídromo :D"
    } else {
      this.resultado = "Lo introducido no es un palíndromo";
    }
  }

  private esPalindromo(value: string):boolean {
    value = value.trim();
    value = value.toLowerCase(); // <---- Remueve espacios al final y al principio
    let valLength = value.length; // <----  la longitud de un string o array es una propiedad, no un metodo
    for (let i = 0; i < Math.floor(value.length/2) ; i++) {
      if(value[i] !== value[value.length-1-i]){
        return false;
      }
    }
    return true;
  }
  
  submitRegistrationForm(value){
    this.nombre = value.nombre
    this.apellido = value.apellido
    console.log(value.selected);
    
    this.genero = value.gen
  }

}
