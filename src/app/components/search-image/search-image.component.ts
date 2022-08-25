import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {

 searchTerm: string = '';

  constructor(private _imageService: ImageService) { }

  ngOnInit(): void {
  }
  sendSearchInfo(){
    if(this.searchTerm.length ==0){      
      this._imageService.setError('Please add a search term')
      return;
    }    
    this._imageService.sendSearchInfo(this.searchTerm)
    this.searchTerm = "";
  }
}
