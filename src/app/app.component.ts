import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {

  constructor(private router: Router){    

    this.router.events.subscribe( event => {
    } );
  }

  ngOnInit(){
  }

  public onMenuActionClick(menuname) {
    this.router.navigate([ "#"+ menuname.toLowerCase() + '-page']);
  }
}
