import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {

 searchTerm: string = '';
 placeholdersStrings : string[] = [
  "Try something, like 'Kittens'",
  "Try something, like 'Puppies'",
  "Try something, like 'Forest'",
  "Try something, like 'Beaches'",
  "Try something, like 'Flags'",
  "Try something, like 'Flowers'",
  "Try something, like 'Romantic'",
  "Try something, like 'Sepia'",
  "Try something, like 'Nature'",
  "Try something, like 'Rome'",
  "Try something, like 'USA'",
  "Try something, like 'Cartoons'",
  "Try something, like 'LOL'",
 ];
 
 pickedText : string = this.placeholder()

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

  placeholder(){    
    return this.placeholdersStrings[Math.floor(Math.random() * this.placeholdersStrings.length )]
  }
}
