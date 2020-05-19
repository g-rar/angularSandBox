import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  //Variable de entrada salida
  private displayText :string;
  private textIsResult = false;

  constructor() {
    this.displayText = '';
   }

  private keyPressed(key){
    //si el texto es resultado de una operación limpia la pantalla
    if(this.textIsResult){
      this.ac();
      this.textIsResult = false;
    }
    this.displayText += key;
  }

  //borra el ultimo caracter de la pantalla
  private del(){
    //si el texto es resultado de una operación limpia la pantalla
    if(this.textIsResult){
      this.ac();
      this.textIsResult = false;
    }
    this.displayText = this.displayText.slice(0, -1);
  }

  //limpia la pantalla
  private ac() {
    this.textIsResult = false;
    this.displayText = '';
  }

  //realiza el cálculo
  private calculate() {
    //bandera para la limpieza de la pantalla
    this.textIsResult = true;
    //parsea el input
    var elements = this.parseInput(this.displayText);
    //comprobación de parentesis
    if(this.proveParenthesis(elements) === false){
      this.displayText = "Error de sintaxys";
      return;
    }

    //convierte de notación fija a infija
    elements = this.infixToFix(elements);
    var colaNumeros = [];
    for(var element of elements){
      //si es un número lo agrega a la cola
      if(typeof(element) === 'number'){
        colaNumeros.push(element);
      }
      else{
        //si no hay dos números para operar devuelve un error de sintaxys
        if(colaNumeros.length < 2){
          this.displayText = "Error de sintaxys"
          return;
        }
        //hace pop de los últimos dos números de la cola y los opera según corresponda.
        var b= colaNumeros.pop();
        var a = colaNumeros.pop();
        switch (element) {
          case '-':
            colaNumeros.push(a-b);
            break;
          case '+':
            colaNumeros.push(a+b);
            break;
          case '/':
            colaNumeros.push(a/b);
            break;
          case '*':
            colaNumeros.push(a*b);
            break;

          default:
            break;
        }
      }
    }
    //despliega el resultado en pantalla
    this.displayText = colaNumeros.pop();

  }

  //Parsea la entrada y la devuelve como una lista de elementos.
  private parseInput(input){
    var operaciones = ['+','*','/','-','(',')']
    var result = [];
    var num = '';
    var onNumber;
    var isOperando = false;
    //comprueba que no sea ningún operando
    for(var element of input){
      for(var operando of operaciones){
        if(operando === element){
            isOperando = true;
        }
      }
      if(isOperando){
        if(onNumber){
          onNumber= false;
          var temp = Number(num);
          result.push(temp);
          console.log(num);
          num = '';
        }
        result.push(element);
        isOperando= false;
      }
      else{
        onNumber =true;
        console.log(num);
        num = num + element;
      }
    }

    if(onNumber){var temp = Number(num); result.push(temp);}
    return result;
  }

  //prueba que los parentesis cierren
  private proveParenthesis(elements){
    var counter = 0;
    for(var element of elements){
      if(element === "("){counter++;}
      else if(element === ")"){counter--;}
    }
    return (counter === 0)? true:false;
  }

  private infixToFix(elements){
    //stack de operaciones
    var stack = [];
    var result = [];

    for(var i = 0; i < elements.length; i++ ){
      var element =  elements[i];
      switch (element) {
        case '+':
        //si no hay elementos en el stack o hay un parentesis en la cima se hace push.
        if(stack.length === 0 || stack[stack.length - 1] === '(' ){
          stack.push(element);
        }
        //se hace pop al operandoanterior y push al actual.
        else{
          result.push(stack.pop());
          stack.push(element);
        }
        break;

        case '-':
        //si no hay elementos en el stack o hay un parentesis en la cima se hace push.
        if(stack.length === 0 || stack[stack.length - 1] === '(' ){
          stack.push(element);
        }
        //se hace pop al operandoanterior y push al actual.
        else{
          result.push(stack.pop());
          stack.push(element);
        }
        break;

        case '*':
        if(stack.length === 0 || stack[stack.length - 1] === '(' ){
          stack.push(element);
        }
        else if(stack[stack.length - 1] === "+" || stack[stack.length - 1] === "-"){
          stack.push(element);
        }
        else{
          result.push(stack.pop());
          stack.push(element);
        }

        break;

        case'/':
        if(stack.length === 0 || stack[stack.length - 1] === '(' ){
          stack.push(element);
        }
        else if(stack[stack.length - 1] === "+" || stack[stack.length - 1] === "-"){
          stack.push(element);
        }
        else{
          result.push(stack.pop());
          stack.push(element);
        }
        break;

        case '(':
        if(typeof(elements[i - 1]) === 'number'){
          stack.push('*');
        }
        stack.push(element);
        break;

        case  ')':
        while (stack[stack.length - 1] !='(' && stack.length > 0) {
          result.push(stack.pop());
        }
        stack.pop();
        break;

        default:
        result.push(element);
          break;
      }
    }
    if(stack.length >= 0){
      result = result.concat(stack);
    }
    console.log(result);
    return result;
  }

  ngOnInit() {
  }
}
