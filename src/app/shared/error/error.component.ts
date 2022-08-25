import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit,OnDestroy {
  text = "";
  ThereIsAnError :boolean = false;
  subscription : Subscription;

  constructor(private _imageService: ImageService) { 

    this.subscription = this._imageService.getError().subscribe(data=>{
      this.showError();
      this.text = data;      
    });
    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showError(): void {
    this.ThereIsAnError = true
    setTimeout(() => {this.ThereIsAnError = false},3000);
  }

}
