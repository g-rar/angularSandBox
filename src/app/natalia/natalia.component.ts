import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-natalia',
  templateUrl: './natalia.component.html',
  styleUrls: ['./natalia.component.css']
})
export class NataliaComponent implements OnInit {

  formulario;
  FormOpinion;
  satisfecho:boolean;
  num1 = 0;
  num2 = 0;
  resultado = 0;
  mensajito = " Gracias por usar este convertidor! ";

  constructor(private formBuilder :FormBuilder) { 
    this.formulario = this.formBuilder.group({
     campo1:0,
     campo2:0
     
    })
    this.FormOpinion= this.formBuilder.group({
      satisfecho:true  
     })
  }

  ngOnInit() {
    //const constantes, no se modifica
    //let no perder el alcance de una variable parecido a var
    //var una vriable 
    //si un parametro tiene ? es opcional 
  }
  
  convertir(formData){
    let num;
    num = formData.campo1+formData.campo2
    this.resultado = num;
  }

  MensajeOpinion(formData){

    if(formData.satisfecho === "sip"){
      this.mensajito = `Nos alegra que le haya sido útil.`;
    
    } else if (formData.satisfecho === "nop"){
      this.mensajito = `Nos entristece que no le haya sido útil.`;
    
  }

}


}
