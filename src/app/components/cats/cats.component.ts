import { Component, OnInit } from '@angular/core';
import { CatPicture } from '../../cat-picture';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats: CatPicture[];

  constructor(private catsService: CatsService) { }

  ngOnInit() {
    this.getSomeCats();
  }

  getSomeCats(): void {
    this.catsService.getSomeCats().subscribe(cats => this.cats = cats);
  }
}
