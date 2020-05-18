import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-walter',
  templateUrl: './walter.component.html',
  styleUrls: ['./walter.component.css']
})
export class WalterComponent implements OnInit {

  inputForm = {};

  constructor(private formBuilder: FormBuilder) {
    this.inputForm = this.formBuilder.group({
      nameInputForm: '',
      lastNameInputForm: '',
      cellphoneInputForm: '',
      emailInputFrom: '',
      carnetInputForm: ''
    });
  }

  ngOnInit() {
  }

  registerAnUserFromForm(value){
    let name = value.nameInputForm;
    let lastName = value.lastNameInputForm;
    let cellphone = value.cellphoneInputForm;
    let email = value.emailInputFrom;
    let carnet = value.carnetInputForm;

    let estudiante = new Estudiante(name, lastName, cellphone, email, carnet);
  }
}

class Estudiante {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  carnet: string;
  constructor(pNombre: string, pApellido: string, pTelefono: string, pEmail: string, pCarnet: string){
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.telefono = pTelefono;
    this.email = pTelefono;
    this.carnet = pCarnet;
  }
}
