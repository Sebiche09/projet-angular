import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExempleService {

  constructor() { }

  getData(): string {
    return "Donnée depuis le service";
  }
}
