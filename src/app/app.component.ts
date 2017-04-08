import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'testServer', content: 'Just a test'},
    {type: 'server', name: 'testServer', content: 'Just a test 1'}
  ];

  onServerAdded(event: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: event.serverName,
      content: event.serverContent
    });
  }

  onBlueprintAdded(event: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.serverName,
      content: event.serverContent
    });
  }
}
