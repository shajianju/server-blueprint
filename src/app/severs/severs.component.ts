import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-severs',
  templateUrl: './severs.component.html',
  styleUrls: ['./severs.component.css']
})
export class SeversComponent {

  serverName: string;
  serverContent: string;
  @Output() servercreated = new EventEmitter<{
    serverName: string;
    content: string
  }>();
  @Output() blueprintcreated = new EventEmitter<{
    serverName: string;
    content: string
  }>();

  addServer() {
    this.servercreated.emit({
      serverName: this.serverName,
      content: this.serverContent
    });

  }

  addServerContent() {
    this.blueprintcreated.emit({
      serverName: this.serverName, content: this.serverContent
    })
  }


}
