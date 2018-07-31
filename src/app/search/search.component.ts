import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieOMDB } from '../movieOMDB';
import { Movie } from '../movie';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _movieService: MovieService) { }
  public movieTitle='';
  movieModel = new Movie("","","","","");
  public movies ;
  omdbMovie;
  ngOnInit() {
    this._movieService.defaultMovie().subscribe(data=> this.omdbMovie=data['Search']);
    this.movies=null;
  }
  onSearch(){
    this._movieService.searchMovie(this.movieTitle).subscribe(data=> this.omdbMovie=data['Search']);
    this.movies=null;
  }
  onSubmit(omdbMovie:MovieOMDB){
      this.movieModel.title=omdbMovie.Title;
      this.movieModel.year=omdbMovie.Year;
      this.movieModel.imdbId=omdbMovie.Production;
      this.movieModel.type=omdbMovie.Released;
      this.movieModel.poster=omdbMovie.Poster;
      this._movieService.saveMovie(this.movieModel).subscribe(res => console.log('Done'));
      
  }
  onClick(){
    this._movieService.getMovies().subscribe(data=> this.movies=data);
    this.omdbMovie=null;
    
  }
  onDelete(movie){
    this._movieService.deleteMovie(movie.id).subscribe(res => console.log('Done'));
    window.location.reload(true);

  }
  
}
