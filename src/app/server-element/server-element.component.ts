import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name:string, content:string};
  // element je isti u server-element.html(element.name ...) i u app.component.html [srvElement]

  constructor() { }

  ngOnInit() {
  }

}
