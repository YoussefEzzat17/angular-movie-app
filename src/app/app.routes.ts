import { Routes } from '@angular/router';

import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'products', component: ProductsComponent, title: 'Browse' },
  { path: 'products/:id', component: ProductDetailsComponent, title: 'Title Details' },
  { path: 'profile', component: ProfileComponent, title: 'Profile' },
  { path: 'favorites', component: FavoritesComponent, title: 'My List' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
