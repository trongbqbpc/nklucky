// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  selectedId = 0;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getHeroes();
      })
    );
  }

  numbers: number[] = Array.from({ length: 100 }, (_, i) => i + 1);

  // onWheel(event: WheelEvent): void {
  //   const gridContainer = document.querySelector('.grid-container') as HTMLElement;
  //   if (event.deltaY > 0) {
  //     gridContainer.scrollLeft += 50;
  //   } else {
  //     gridContainer.scrollLeft -= 50;
  //   }
  // }
}
