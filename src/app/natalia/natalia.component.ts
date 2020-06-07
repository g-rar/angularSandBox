import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-natalia',
  templateUrl: './natalia.component.html',
  styleUrls: ['./natalia.component.css']
})
export class NataliaComponent implements OnInit {

  formulario;
  num1 = 0;
  num2 = 0;
  mensajito = "Mensajito para el usuario";

  constructor(private formBuilder :FormBuilder) { 
    this.formulario = formBuilder.group({
     campo1:0,
     campo2:0
     
    })
  }

  ngOnInit() {
  }
  
  /*MostrarMs(){

    if (=== "sip"){
      this.mensajito = `Nos alegra que le haya sido útil.`;
    } else {
      this.mensajito = `Nos apena que no le haya sido útil.`;
    }
    
  }*/

}
