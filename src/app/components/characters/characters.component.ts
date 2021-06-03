import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  lista: string[] = ['Slytherin', 'Gryffindor', 'Ravenclaw', 'Hufflepuf'];

  public dataCharacters!: any;

  item!: string;

  public age!: number;

  showAge!: number;

  public id: string = '';

  constructor(
    private mainService: MainService,
    private activateRuta: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activateRuta.snapshot.paramMap.get('id') as string;
    this.getCharactersSer(this.id);
  }

  getCharactersSer(id: string) {
    this.route.navigate(['/house', id], { relativeTo: this.activateRuta });
    this.mainService.getCharacters(id).subscribe(
      (res) => {
        this.dataCharacters = res;
        this.dataCharacters.forEach((value: any) => {
          if (value.dateOfBirth != '' && value.yearOfBirth != '') {
            this.age = value.yearOfBirth;
          } else if (value.dateOfBirth == '' && value.yearOfBirth != '') {
            this.age = value.yearOfBirth;
          } else if (value.dateOfBirth == '' && value.yearOfBirth == '') {
            this.age = 0;
          }
          this.ageCalculator(this.age);
          if (this.age) {
            value.age = this.showAge;
          }
        });
      },
      (err) => console.log(err)
    );
  }

  ageCalculator(age: number) {
    if (this.age) {
      const today = new Date().getFullYear();
      this.showAge = Math.abs(today - this.age);
    }
  }
}
