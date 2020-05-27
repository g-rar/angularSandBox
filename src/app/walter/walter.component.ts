import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-walter',
  templateUrl: './walter.component.html',
  styleUrls: ['./walter.component.css']
})
export class WalterComponent implements OnInit {

  inputForm = {};
  students = [];

  constructor(private formBuilder: FormBuilder) {
    this.inputForm = this.formBuilder.group({
      nameInputForm: '',
      lastNameInputForm: '',
      cellphoneInputForm: '',
      emailInputForm: '',
      carnetInputForm: ''
    });
  }

  ngOnInit() {
  }

  registerAnUserFromForm(value) {
    const name = value.nameInputForm;
    const lastName = value.lastNameInputForm;
    const cellphone = value.cellphoneInputForm;
    const email = value.emailInputForm;
    const carnet = value.carnetInputForm;

    const student = new Estudiante(name, lastName, cellphone, email, carnet);
    this.students.push(student);
  }
}

class Estudiante {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  carnet: string;
  constructor(pNombre: string, pApellido: string, pTelefono: string, pEmail: string, pCarnet: string) {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.telefono = pTelefono;
    this.email = pEmail;
    this.carnet = pCarnet;
  }
}
