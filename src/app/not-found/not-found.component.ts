import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  
  extraText = "";

  
  constructor(private router : Router) { }
  
  ngOnInit() {
    if(this.router.url === '/papasFritas'){
      this.extraText = 'Yo tambien quisiera una página de papas fritas :c '
    }
    this.extraText += 'Como sea... este texto se añadió programáticamente.'
  }

}
