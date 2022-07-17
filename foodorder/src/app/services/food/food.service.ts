import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }
  
  getAllTag():Tag[]{
    return [
      { name: 'All', count: 8 },
      { name: 'FastFood', count: 7 },
      { name: 'Pizza', count: 3 },
      { name: 'Lunch', count: 6 },
      { name: 'Snack', count: 2 },
      { name: 'Burger', count: 2 },
      { name: 'Sandwich', count: 1 },
      { name: 'Brownies', count: 1 }
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Brooklyn Pizza',
        cookTime: '30-45 m',
        price: 10,
        favorite: true,
        origins: ['New York'],
        star: 4.5,
        imageUrl: '/assets/brookynpizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Brownies',
        cookTime: '15-20 m',
        price: 2,
        favorite: false,
        origins: ['Europe ', 'USA'],
        star: 3.5,
        imageUrl: '/assets/brownies-22.jpg',
        tags: ['Snack', 'Chocolate', 'Brownies']
      },
      {
        id: 3,
        name: 'Chicken Burger',
        cookTime: '10-15 m',
        price: 5,
        favorite: true,
        origins: ['USA ', 'Italy'],
        star: 3,
        imageUrl: '/assets/burger.jpg',
        tags: ['FastFood', 'Burger', 'Lunch']
      },
      {
        id: 4,
        name: 'Cheese Burger',
        cookTime: '10-15 m',
        price: 5,
        favorite: true,
        origins: ['USA ', 'Canada'],
        star: 3,
        imageUrl: '/assets/hamburger.jpg',
        tags: ['FastFood', 'Burger', 'Lunch']
      },
      {
        id: 5,
        name: 'Chicken Nuggets',
        cookTime: '8-10 m',
        price: 8,
        favorite: true,
        origins: ['New York'],
        star: 4.5,
        imageUrl: '/assets/chicken-nuggets.jpeg',
        tags: ['FastFood', 'Chicken Nuggets', 'Snack']
      },
      {
        id: 6,
        name: 'Chicken Sandwich',
        cookTime: '15-20 m',
        price: 5,
        favorite: true,
        origins: ['New York ', 'USA ', 'India'],
        star: 3,
        imageUrl: '/assets/chicken-sandwich.jpg',
        tags: ['FastFood', 'Sandwich', 'Lunch']
      },
      {
        id: 7,
        name: 'Pepperoni Pizza',
        cookTime: '30-45 m',
        price: 15,
        favorite: true,
        origins: ['Italy ', 'USA'],
        star: 2.5,
        imageUrl: '/assets/pizza.jpg',
        tags: ['FastFood', 'Pepperoni', 'Pizza', 'Lunch']
      },
      {
        id: 8,
        name: 'Vegetable Pizza',
        cookTime: '30-45 m',
        price: 12,
        favorite: true,
        origins: ['Italy ', 'USA'],
        star: 4,
        imageUrl: '/assets/veg pizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      }
    ];

  }
}
