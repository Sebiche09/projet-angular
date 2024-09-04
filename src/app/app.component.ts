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
  monExemple2! : Exemple;
  monExemple3! : Exemple;

  ngOnInit() {
    this.monExemple = new Exemple("Mon premier post", "Ceci est mon premier post", new Date(), 2, "https://picsum.photos/1080/720");
    this.monExemple2 = new Exemple("Mon deuxième post", "Ceci est mon deuxième post", new Date(), 3, "https://picsum.photos/1080/720?random=2");
    this.monExemple3 = new Exemple("Mon troisième post", "Ceci est mon troisième post", new Date(), 4, "https://picsum.photos/1080/720?random=3");
  }
}
