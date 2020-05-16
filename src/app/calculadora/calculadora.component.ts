import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private displayText :displayText;
  constructor() {
    this.displayText = '';
   }

  private keyPressed(key){
    this.displayText += key;
  }

  ngOnInit() {
  }
}
