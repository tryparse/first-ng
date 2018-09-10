import { Component, OnInit } from '@angular/core';
import { Language } from '../../language';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: Language[];

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  getLanguages(): void {
    this.languageService.getLanguages().subscribe(languages => this.languages = languages);
  }

  clear(): void {
    if (this.languages != null) {
      this.languages.length = 0;
    }
  }

  hasItems(): boolean {
    return this.languages != null && this.languages.length !== 0;
  }

}
