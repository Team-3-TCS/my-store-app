import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { 
  }

  ngOnInit(): void {
    $.getScript("./assets/js/main.js", function (data, estado) {
      if (estado == 'success') {
        console.log("Cargado script home");
      }
      else {
        console.log("NO Cargado script home");
      }
    });
  }
  

}
