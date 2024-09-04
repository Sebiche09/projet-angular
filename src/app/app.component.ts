import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExempleComponent } from './exemple/exemple.component';
import { Exemple } from './models/nom-app';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExempleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  monExemple! : Exemple;

  ngOnInit() {
    this.monExemple = new Exemple("post", "Ceci est mon premier post", new Date(), 2, "https://picsum.photos/200/300");
  }
}
