import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string }>(); //outpu gia na peraso ta stixia ekso apo to component
  //EventEmitter gia custome events k to kano import apo to angular core
 @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string }>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

onAddServer() {
  this.serverCreated.emit({
    serverName: this.newServerName,
    serverContent: this.newServerContent
  });
}

onAddBlueprint() {
  this.blueprintCreated.emit({
    serverName: this.newServerName,
    serverContent: this.newServerContent
  });
}



}
