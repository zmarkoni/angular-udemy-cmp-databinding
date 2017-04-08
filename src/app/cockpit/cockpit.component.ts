import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CockpitComponent implements OnInit {
  // newServerName = '';  no need anymore since I am using local reference in the template #serverNameInput
  // newServerContent = '';

  // ### Ovde je fora da napravimo emitere u child componenti, koje cemo osluskivti u parent componenti
  // imena lisenera iz app.component.html su u stvari properiji posto su sa desne strane
  // od njih pravimo emitere
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('serverContentInput') serverContentInput:ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    }); //ovde emitujemo event koji osluskujemo u app.component.html
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      //serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
