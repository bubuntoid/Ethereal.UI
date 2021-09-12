import { Component } from '@angular/core';
import { PreviewService } from './services/preview.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private previewService : PreviewService) { }

  isLoading : boolean = false;

  url: string = "";
  onUrlChanged(event: any){
    this.url = event;
    this.previewService.getDescriptionPreview(this.url).subscribe(response => {
      this.description = response;
    });
  }

  useCustomDescription: boolean = false;
  onUseCustomDescriptionChanged(event: any){
    this.useCustomDescription = event;
  }

  description: string = "";
}
