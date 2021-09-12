import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url: string = "";
  onUrlChanged(event: any){
    this.url = event;
  }

  customDescription: boolean = false;
  onCustomDescriptionChanged(event: any){
    this.customDescription = event;
  }
}
