import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.css']
})
export class BlueprintComponent {

  @Input('serverElements') element: { type: string, name: string, content: string };



}
