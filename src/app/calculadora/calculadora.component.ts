import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private displayText :string;
  constructor() {
    this.displayText = '';
   }

  private keyPressed(key){
    this.displayText += key;
  }

  private del(){
    this.displayText = this.displayText.slice(0, -1);
  }

  private ac() {
    this.displayText = '';
  }

  private calculate() {
    var elements = this.displayText.split(' ');
    console.log(elements);
  }

  ngOnInit() {
  }
}
