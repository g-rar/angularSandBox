import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerardo',
  templateUrl: './gerardo.component.html',
  styleUrls: ['./gerardo.component.css']
})
export class GerardoComponent implements OnInit {

  textoEjemplo = "Este texto esta metido desde typescript";

  constructor() { }

  ngOnInit() {
  }

}
