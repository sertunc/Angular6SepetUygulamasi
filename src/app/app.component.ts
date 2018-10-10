import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First App';
  
  options = {
    position: ["bottom", "right"],
    timeOut: "3000",
    lastOnBottom: true
  }
  
  ngOnInit() {

  }
}
