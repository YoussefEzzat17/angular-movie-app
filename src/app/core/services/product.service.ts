import { Injectable } from '@angular/core'; import { PRODUCTS } from '../../../assets/products'; import { Product } from '../models/product.model';
@Injectable({ providedIn: 'root' }) export class ProductService { readonly products = PRODUCTS; getById(id: number): Product | undefined { return this.products.find((product) => product.id === id); } }
