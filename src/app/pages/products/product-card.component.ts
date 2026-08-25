import { Component, Input, inject } from '@angular/core';
import { CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../core/models/product.model';
import { CartService } from '../../core/services/cart.service';
import { FavoritesService } from '../../core/services/favorites.service';
import { ToastService } from '../../core/services/toast.service';
import { StockStatusPipe } from '../../pipes/stock-status.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe, StockStatusPipe],
  template: `
    <article class="overflow-hidden rounded-2xl bg-slate-900 shadow-sm ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-violet-500/60">
      <img [src]="product.imageUrl" [alt]="product.name" class="h-52 w-full object-cover" />
      <div class="p-5">
        <div class="flex items-center justify-between gap-3">
          <span class="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-300">{{ product.category | uppercase }}</span>
          <button (click)="toggleFavorite()" [class.text-rose-400]="favorites.has(product.id)" class="text-xl text-slate-500">{{ favorites.has(product.id) ? '♥' : '♡' }}</button>
        </div>
        <h3 class="mt-4 text-lg font-bold">{{ product.name }}</h3>
        <p class="mt-1 min-h-12 text-sm text-slate-400">{{ product.description }}</p>
        <div class="mt-3 flex flex-wrap gap-2">@for (tag of product.tags; track tag) { <span class="text-xs text-slate-500">#{{ tag | lowercase }}</span> }</div>
        <div class="mt-4 flex items-center justify-between"><strong class="text-xl">{{ product.price | currency }}</strong><span class="text-sm text-amber-400">★ {{ product.rating }}</span></div>
        <p class="mt-2 text-xs text-slate-500">Added on {{ product.addedOn | date:'mediumDate' }}</p>
        <div class="mt-4 flex items-center justify-between"><span [class.text-rose-400]="product.stock === 0" [class.text-amber-400]="product.stock > 0 && product.stock < 5" class="text-sm font-semibold text-emerald-400">{{ product.stock | stockStatus }}</span><span class="text-xs text-slate-500">{{ product.stock }} passes left</span></div>
        <div class="mt-5 flex gap-2"><button (click)="addToCart(product)" [disabled]="product.stock === 0" class="flex-1 rounded-xl bg-violet-500 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:bg-slate-700">Add to watchlist</button><button (click)="viewDetails()" class="rounded-xl border border-slate-700 px-3 py-2.5 text-sm font-semibold hover:bg-slate-800">Details</button></div>
      </div>
    </article>
  `,
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  readonly cart = inject(CartService);
  readonly favorites = inject(FavoritesService);
  private toast = inject(ToastService);
  private router = inject(Router);

  addToCart(product: Product): void {
    this.cart.add(product);
    this.toast.show(`${product.name} added to your watchlist`);
  }

  toggleFavorite(): void {
    const wasFavorite = this.favorites.has(this.product.id);
    this.favorites.toggle(this.product.id);
    this.toast.show(wasFavorite ? `${this.product.name} removed from My List` : `${this.product.name} added to My List`);
  }

  viewDetails(): void { this.router.navigate(['/products', this.product.id]); }
}
