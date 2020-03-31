import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showMessage();
  }

  showMessage(): string {
    return environment.message;
  }
}
