import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: { type: string, name: string, content: string };
  //vazo to input() mprosta gia na stilo ta dedomena sto app-component.html

  constructor() { }

  ngOnInit() {
  }

}
