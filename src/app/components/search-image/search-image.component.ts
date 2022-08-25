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
  "Search anything, like 'Kitties'",
  "Search anything, like 'Puppies'",
  "Search anything, like 'Forest'",
  "Search anything, like 'Beaches'",
  "Search anything, like 'Flags'",
  "Search anything, like 'Flowers'",
  "Search anything, like 'Romantic'",
  "Search anything, like 'Sepia'",
  "Search anything, like 'Nature'",
  "Search anything, like 'Rome'",
  "Search anything, like 'USA'",
  "Search anything, like 'Cartoons'",
  "Search anything, like 'LOL'",
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
