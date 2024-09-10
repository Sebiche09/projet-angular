import { Component } from '@angular/core';
import { ExempleService } from '../../services/exemple.service';
@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  constructor(private exempleService: ExempleService) { }

  data : string = "";

  afficherData() {
    this.data = this.exempleService.getData();
  }

}
