import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
    id: 'r1',
    title: 'Pork Tapa',
    imageUrl:'https://images.aws.nestle.recipes/resized/86c77026e541c84d9eaf91d4931d8713_MAG9871_700px_1500_700.jpg',
    ingredients:['● Garlic','● Soy Sauce','● Brown Sugar','● Ground Pepper','● Pork Shoulder','● Vegetable Oil','● Spiced Vinegar ','● Hot Chili Peppers']
    },
    {
    id: 'r2',
    title: 'Tortang Talong',
    imageUrl:'https://images.aws.nestle.recipes/resized/3bd18e3a122a5a23fa51db3881bb8996_B_123_MGI_700px_1500_700.jpg',
    ingredients:['● Salt','● Egg','● Onion','● Egg','● Onion ','● Vegetable Oil']
    },
    {
    id: 'r3',
    title: 'Pork Binagoongan',
    imageUrl:'https://images.aws.nestle.recipes/resized/36e0fa1b373cde1cab08a879bdfbac81_maggi_2021_pork_binagoongan_with_product_1500_700.jpg',
    ingredients:['● Onion','● Garlic','● Water','● Pork Belly','● Tomato ','● Green Finger Chili','● Spiced Vinegar ','● Brown Sugar ','● Coconut Cream ','● Vegetable Oil']
    },
    {
    id: 'r4',
    title: 'Chicken Liver Adobo',
    imageUrl:'https://images.aws.nestle.recipes/resized/31339a0049e9be7db1984ea9b7cdc0d5_D_0286_MAGGI_700px_1500_700.jpg',
    ingredients:['● Garlic','● Bay Leaf','● Soy Sauce','● Water','● Brown Sugar ','● White Vinegar','● Black Peppercorn ','● Vegetable Oil','● Chicken Liver']
    },
    {
    id: 'r5',
    title: 'Bistek-Style Pork Steak',
    imageUrl:'https://images.aws.nestle.recipes/resized/a8e87b3765e7a4f3a777cc9244efc978_Bistek-Style_Pork_Steak_Main_1500_700.jpg',
    ingredients:['● Onion','● Garlic','● Water','● Soy Sauce','● Calamansi Juice','● Brown Sugar ','● Ground Pepper','● Pork Shoulder','● Vegetable Oil']
    },  
];

  constructor() { }

    getAllRecipes(){
      return[...this.recipes];
    }

    getRecipe(recipeId: string){
      return{...this.recipes.find(recipe => recipe.id == recipeId)}
    }

    onDeleteRecipe(recipeId: string){
      this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
    }
}
