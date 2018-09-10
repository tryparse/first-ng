import { Injectable } from '@angular/core';
import { Language } from '../language';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private url = 'http://localhost:51611/api/language/';

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.url);
  }

  getLanguage(id: number): Observable<Language> {
    return this.http.get<Language>('${this.url}/${id}');
  }
}
