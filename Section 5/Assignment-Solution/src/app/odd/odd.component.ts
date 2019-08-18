import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
 @Input() number: number;   //epidi o arithmos tha erthi apo ekso  xrisimopio to Input mprosta

  constructor() { }

  ngOnInit() {
  }

}
