import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public products: any= []
public consommables: any= []

  constructor() { }

  ngOnInit(): void {
    this.products= [
      {id: 1, nomProduit:'Ecran', prix: 200, stock: 2},
      {id: 2, nomProduit:'iphone', prix: 800, stock: 5},
      {id: 3, nomProduit:'imprimante', prix: 900, stock: 2},
      {id: 4, nomProduit:'clavier', prix: 50, stock: 4},
      {id: 5, nomProduit: 'camera ', prix: 500, stock: 1}
    ];

    this.consommables = [
      {id: 1, nomProduit:'ramette', prix: 20, stock: 2},
      {id: 2, nomProduit:'trombones', prix: 50, stock: 5},
      {id: 3, nomProduit:'stylos', prix: 30, stock: 2},
      {id: 4, nomProduit:'cartouches d\'encre', prix: 50, stock: 4},
      {id: 5, nomProduit: 'Encre', prix: 500, stock: 1}
    ]
  }

}
