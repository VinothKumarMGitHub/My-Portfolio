import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 

@Component({
  selector: 'app-aboutmemenu',
  templateUrl: './aboutmemenu.component.html',
  styleUrls: ['./aboutmemenu.component.scss']
})
export class AboutmemenuComponent implements OnInit {

  @Output() onMenuActionClick: EventEmitter<string> = new EventEmitter();
  
  constructor() {
   }

  ngOnInit(): void {
  }

  public  onMenuClick(menuname){
    if( this.onMenuActionClick)
      this.onMenuActionClick.emit( menuname) ;
  }

}
