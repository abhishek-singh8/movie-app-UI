import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-child-component1',
  templateUrl: './child-component1.component.html',
  styleUrls: ['./child-component1.component.css']
})
export class ChildComponent1Component implements OnInit {

  constructor(private _movieService: MovieService) { }
  public movies = [];

  ngOnInit() {
   
  }
  onClick(){
    this._movieService.getMovies().subscribe(data=> this.movies=data);
    
  }
  onDelete(movie){
    this._movieService.deleteMovie(movie.id).subscribe(res => console.log('Done'));
    window.location.reload(true);
  }
}
