import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.css']
})
export class ListImageComponent implements OnInit {
  subscription: Subscription;
  searchTerm :string = "";
  imageList : any[] = [];
  isLoading :boolean = false;
  imagesPerPage :number = 40;
  currentPage :number = 1;
  totalPages :number = 0;

  constructor(private _imageService: ImageService) {
    this.subscription = this._imageService.getSearchTerm().subscribe(data => {      
      this.totalPages = 1
      this.searchTerm = data;
      this.getImages()
    })
  }

  ngOnInit(): void {
  }

  getImages(){    
    this.imageList = []
    this.isLoading = true;

    this._imageService.getImages(this.searchTerm, this.imagesPerPage, this.currentPage).subscribe({
       next: (resultsData) => {        
        
        if(resultsData.hits.length == 0){
          this.isLoading = false;
          this._imageService.setError('Oops, we could not find any results for "' + this.searchTerm + '"')
          return;
        }
        this.isLoading = false;
        this.totalPages  = this.calculatePages(resultsData.totalHits);
        this.imageList = resultsData.hits;
        
      },
      error: (error) => {
        this.isLoading = false;
        this._imageService.setError('Oops, the service has an error');
        }
    });
  
  }

  searchFromTag(tag : any){
    this.searchTerm = tag;
    this.getImages();    
  }

  calculatePages (total :number){
    return  Math.ceil(total / this.imagesPerPage)
  }

  movePage(number:number){

    if(this.currentPage+ number < 1 || this.currentPage + number > this.totalPages) {
      return
    } 
    this.currentPage = this.currentPage + number;

    this.getImages()

  }

}
