import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  esPalindromo(value: string):boolean {
    value = value.trim().toLowerCase(); // <---- Remueve espacios al final y al principio y lo pasa a minuscula
    let valLength = value.length; // <----  la longitud de un string o array es una propiedad, no un metodo
    for (let i = 0; i < Math.floor(value.length/2) ; i++) {
      if(value[i] !== value[value.length-1-i]){
        return false;
      }
    }
    return true;
  }
  
}
