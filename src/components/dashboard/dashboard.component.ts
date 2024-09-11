import { Component } from '@angular/core';
import { Exemple } from '../../models/nom-app';
import { ExempleComponent } from '../exemple/exemple.component';
import { TaskComponent } from "../task/task.component";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ExempleComponent, TaskComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  monExemple! : Exemple;
  monExemple2! : Exemple;
  monExemple3! : Exemple;
  monTableau!: Exemple[];
  ngOnInit() {
    this.monTableau = [
      this.monExemple = new Exemple("Mon premier post", "Ceci est mon premier post", new Date(), 2, "https://picsum.photos/1080/720"),
      this.monExemple2 = new Exemple("Mon deuxième post", "Ceci est mon deuxième post", new Date(), 3, "https://picsum.photos/1080/720?random=2"),
      this.monExemple3 = new Exemple("Mon troisième post", "Ceci est mon troisième post", new Date(), 4, "https://picsum.photos/1080/720?random=3")
    ];
    this.monExemple.setLocation("canada");
    this.monExemple2.setLocation("Paris");
    
    this.monExemple3.setLocation("Bruxelles");

  }
}
