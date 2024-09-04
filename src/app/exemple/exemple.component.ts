import { Component, Input } from '@angular/core';
import { Exemple } from '../models/nom-app';
@Component({
  selector: 'app-exemple',
  standalone: true,
  imports: [],
  templateUrl: './exemple.component.html',
  styleUrl: './exemple.component.scss'
})
export class ExempleComponent {

  @Input() exemple!: Exemple;
  isLiked = false;
  /*
  title! : string;
  description! : string;
  createdAt! : Date;
  like! : number;
  imageUrl! : string;

  ngOnInit() {
    this.title = "Mon premier post";
    this.description = "Ceci est mon premier post";
    this.createdAt = new Date();
    this.like = 2;
    this.imageUrl = "https://picsum.photos/200/300";
  }
    */
  onAddLike(): void {
    this.exemple.addLike();
    this.isLiked = true;
  }
  onRemoveLike(): void {
    this.exemple.removeLike();
    this.isLiked = false;
  }
} 

