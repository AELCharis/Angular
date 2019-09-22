import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() intervalFired = new EventEmitter<number>();
//kathe fora pou tha ginete active (fired) dimiourgi ena evenemitter pou ine arithmos
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame () {
    this.interval = setInterval(() => {
    this.intervalFired.emit(this.lastNumber + 1); //kalo to intervalFired pou dimiourgisa k kano prosthesi +1
    this.lastNumber++;
    },1000); //setInterval iparxi stin javascript , kathe 1 defterolepto
  }

  onPauseGame () {
    clearInterval(this.interval); //clearInterval iparxi sti javascript
  }
}
