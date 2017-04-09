import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serverElements = [
  //   {type: 'server', name: 'testServer', content: 'Just a test'}, // hook se opaljuje za svaki objekat, tj instancu
  // ];
  //
  // onServerAdded(event: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: event.serverName,
  //     content: event.serverContent
  //   });
  // }
  //
  // onBlueprintAdded(event: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: event.serverName,
  //     content: event.serverContent
  //   });
  // }
  //
  // onChangeFirst() {
  //   this.serverElements[0].name = 'changed';
  // }
  //
  // onDestroyFirst() {
  //   this.serverElements.splice(0, 1);
  // }
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    }
    else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
