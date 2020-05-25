import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  public calculate(input:string){
    //var elements=this.parseInput(this.displayText);
    var elements=this.parseInput(input);
    //comprobación de parentesis
    if(this.proveParenthesis(elements as unknown as string) === false){
      //this.displayText = "Error de sintaxys";
      return "Error de sintaxys";
    }

    //convierte de notación fija a infija
    elements = this.infixToPostfix(elements);
    var colaNumeros = [];
    for(var element of elements){
      //si es un número lo agrega a la cola
      if(typeof(element) === 'number'){
        colaNumeros.push(element);
      }
      else{
        //si no hay dos números para operar devuelve un error de sintaxys
        if(colaNumeros.length < 2){
          return "Error de sintaxys";
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
    return colaNumeros.pop();


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
  private proveParenthesis(elements:string){
    var counter = 0;
    for(var element of elements){
      if(element === "("){counter++;}
      else if(element === ")"){counter--;}
    }
    return (counter === 0)? true:false;

  }

  // hace conversión de notación infija a postfija, no realiza ninguna comprobación,
  // se asume que ya han sido realizadas antes de la llamada a la función
  // caso contrario devuelve un Array sin sentido.
  private infixToPostfix(elements){
    //stack de operaciones
    console.log(elements)
    var stack = [];
    var result = [];

    for(var i = 0; i < elements.length; i++ ){
      var element =  elements[i];
      //console.log(element);
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
        //se hace pop al operando anterior y push al actual.
        else{
          result.push(stack.pop());
          stack.push(element);
        }
        break;

        //si encuentra una multiplicación
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
        /*if(typeof(elements[i - 1]) === 'number'){
          stack.push('*');
        }*/
        var originalPos = i -1;
        var parentesisQuantity=1;
        let subString = []
        //recorre laos elementos entre parentesis
        for (var j = (i+1);j < elements.length && parentesisQuantity >0; j++){
          //si es el final de los parentesis, hace una llamada a infixToPostfix con su contenido
          // y concatena el resultado
          if(elements[j] === ")" && parentesisQuantity ===1){
            result = result.concat(this.infixToPostfix(subString));
            parentesisQuantity--;
            //i--;
          }
          // si es un parentesis de cierre, reduce la cantidad de parentesis y lo agrega al contenido
          else if(elements[j] === ")"){
            //console.log("HOLI :3");
            parentesisQuantity = parentesisQuantity -1;
            subString.push(elements[j]);
          }
          else if(elements[j] === "("){
            parentesisQuantity++;
            subString.push(elements[j]);
          }
          //si es un número o un operando, lo agrega al contenido
          else{
            subString.push(elements[j]);
            i++;
          }
        }
        //Si antes del parentesis no hay una operación definida, se agrega la operación "*"
        if(typeof(elements[originalPos]) === 'number'){
          result.push('*');
        }
        console.log(elements[i]);
        break;

        //unicamente para evitar que se active default
        case ')':break;

        //hace un push de el elemento sobre el que esté
        default:
        result.push(element);
          break;
      }
    }
    //si no hay mas elementos y el stack tiene operadores, entonces se concatenan al resultado.
    if(stack.length >= 0){
      result = result.concat(stack);

    }
    console.log(result);
    return result;
  }
}
