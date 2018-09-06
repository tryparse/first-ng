import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatPicture } from '../cat-picture';



@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private url = '';

  constructor(private http: HttpClient) {  }

  getSomeCats(): Observable<CatPicture[]> {
    return this.http.get<CatPicture[]>(
      'https://api.thecatapi.com/v1/images/search?size=small&limit=4',
       { headers: new HttpHeaders().set('x-api-key', '5ad690f5-b5b5-4607-b7f1-3d5128c509c4') } );
  }
}
