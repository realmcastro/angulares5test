import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  selectedMovie: any = null;
  apiKey = 'cbaf4090c7377ceda48976ad4ba6e0a1'; // Insira sua chave da API aqui

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;
    this.http.get(url).subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  selectMovie(movie: any) {
    const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${this.apiKey}&language=en-US`;
    this.http.get(url).subscribe((data: any) => {
      const trailer = data.results.find((video: any) => video.type === 'Trailer');
      if (trailer) {
        movie.trailerKey = trailer.key;
      }
      this.selectedMovie = movie;
    });
  }

  getSafeUrl(key: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`);
  }
}