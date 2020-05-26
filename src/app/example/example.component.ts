import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  //    como concepto general, el html puede referenciar con
  //    los atributos del componente que le corresponde usando {{}}

  resultado = "<p>Lo introducido no es un palíndromo</p>";  //en el html se accesa aqui con {{resultado}}
  inputValue = "Hola Amigos :D";
  exampleForm = {};
  campo1 = "";
  campo2 = "";
  spamList = [1,"GALLO",76,"AHUMADO",35,"UNICODE",246,"NIGERIA",6653,"TROPICAL","EDGARSILVA",1435,"AYAYA",2565,"MICROSOFT",5624,543763,"ORTEGA"];

  //      En el metodo constructor se pasan como parametros los módulos y servicios que se va
  //      a necesitar. Por ahora no necesitamos mas que los forms.
  constructor(private formBuilder:FormBuilder) {
    //      vamos a usar el constructor para definir los campos del form
    this.exampleForm = this.formBuilder.group({
      primerCampoDelForm: "",
      segundoCampoDelForm: ""
    })
  }

  ngOnInit() {
  }

  //     Los métodos de una clase son por defecto públicos y retornan void
  onInput(value: string){
    //     La idea es cambiar la propiedad resultado. Los cambio a esa propiedad
    //     Se veran reflejados automáticamente en el html
    if(this.esPalindromo(value)){
      this.resultado = "<p>Eso sí es un palídromo :D</p>"
    } else {
      this.resultado = "<p>Lo introducido no es un palíndromo</p>";
    }
  }

  //     Se debería hacer un servicio para funciones no especificas del componente
  //     este metodo retorna un booleano y es privado
  private esPalindromo(value: string):boolean {
    value = value.trim(); // <---- Remueve espacios al final y al principio
    let valLength = value.length; // <----  la longitud de un string o array es una propiedad, no un metodo
    for (let i = 0; i < Math.floor(value.length/2) ; i++) {
      if(value[i] !== value[value.length-1-i]){
        return false;
      }
    }
    return true;
  }
  
  submitExampleForm(value){
    this.campo1 = value.primerCampoDelForm
    this.campo2 = value.segundoCampoDelForm
  }
}
