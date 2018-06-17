import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Component({
  selector: 'mdk-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe('A Test Recipe', 'this is a test', 'https://goo.gl/images/mFzcM3')
  ];

  constructor() { }

  ngOnInit() {
  }

}
