import { Routes } from '@angular/router';

import { BindingPracticeComponent } from './pages/binding-practice/binding-practice.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignalsPlaygroundComponent } from './pages/signals-playground/signals-playground.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'products', component: ProductsComponent, title: 'Browse' },
  { path: 'products/:id', component: ProductDetailsComponent, title: 'Title Details' },
  { path: 'profile', component: ProfileComponent, title: 'Profile' },
  { path: 'favorites', component: FavoritesComponent, title: 'My List' },
  { path: 'practice', component: BindingPracticeComponent, title: 'Binding Practice' },
  { path: 'signals', component: SignalsPlaygroundComponent, title: 'Signals Playground' },
  { path: 'movies', component: MoviesComponent, title: 'Real Movie API' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
