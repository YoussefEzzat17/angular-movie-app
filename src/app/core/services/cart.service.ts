import { Injectable, signal } from '@angular/core'; import { Product } from '../models/product.model';
@Injectable({ providedIn: 'root' }) export class CartService { readonly count = signal(0); add(product: Product): void { if (product.stock > 0) this.count.update((count) => count + 1); } }
