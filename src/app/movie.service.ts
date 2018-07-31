import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs';
import { MovieOMDB } from './movieOMDB';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
 
  private _urlGet: string ="http://localhost:8081/api/v1/movies"; 
  private _urlPost: string="http://localhost:8081/api/v1/movie";
  private _urlDelete: string="http://localhost:8081/api/v1/delete/";
  private omdbUrl: string = "http://www.omdbapi.com/?s=";
  private apiKey: string = "&apikey=6db283eb"

  constructor(private http:  HttpClient) { }
 
  saveMovie(movie:Movie):Observable<Movie>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post<Movie>(this._urlPost,movie);
  }
  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this._urlGet);
  }
  searchMovie(title:string){
    let url =`${this.omdbUrl}${title}${this.apiKey}`;
    return this.http.get(url);
  }
  deleteMovie(movieId){
    return this.http.delete(this._urlDelete+movieId);
  }
  defaultMovie(){
    return this.http.get('http://www.omdbapi.com/?s=fast&apikey=6db283eb');
  }
}
