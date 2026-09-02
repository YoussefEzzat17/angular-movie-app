import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { User } from '../../core/models/user.model';

@Component({
  standalone: true,
  imports: [FormsModule, DatePipe],
  template: `
    <section class="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <p class="text-sm font-semibold text-violet-400">YOUR PROFILE</p>
      <h1  class="mt-1 text-4xl font-bold">Make it yours.</h1>
      <p class="mt-3 text-slate-400">Type in the form and watch the preview update through two-way binding.</p>

      <div class="mt-9 grid gap-8 rounded-3xl bg-slate-900 p-6 shadow-sm ring-1 ring-slate-700 md:grid-cols-2 md:p-10">
        <form class="space-y-5">
          <label class="block text-sm font-semibold">Name
            <input [(ngModel)]="user.name" name="name" class="mt-2 w-full rounded-xl border border-slate-600 bg-slate-800 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-violet-400 focus:outline-none" />
          </label>
          <label class="block text-sm font-semibold">Email
            <input [(ngModel)]="user.email" name="email" type="email" class="mt-2 w-full rounded-xl border border-slate-600 bg-slate-800 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-violet-400 focus:outline-none" />
          </label>
          <label class="block text-sm font-semibold">Avatar URL
            <input [(ngModel)]="user.avatarUrl" name="avatarUrl" class="mt-2 w-full rounded-xl border border-slate-600 bg-slate-800 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-violet-400 focus:outline-none" />
          </label>
          <label class="block text-sm font-semibold">Member since
            <input [(ngModel)]="user.memberSince" name="memberSince" type="date" class="mt-2 w-full rounded-xl border border-slate-600 bg-slate-800 px-3 py-2.5 text-slate-100 focus:border-violet-400 focus:outline-none" />
          </label>
        </form>

        <aside class="rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-950 p-6 shadow-inner shadow-violet-950/40">
          <p class="text-xs font-bold tracking-wider text-violet-300">LIVE PREVIEW</p>
          <img [src]="user.avatarUrl" [alt]="user.name" class="mt-5 w-24 rounded-full object-cover ring-2 ring-violet-400/60"/>
          <h2 class="mt-4 text-2xl font-bold text-white">{{ user.name }}</h2>
          <p class="mt-1 text-slate-300">{{ user.email }}</p>
          <p class="mt-6 text-sm text-slate-300">Member since <strong class="text-violet-200">{{ user.memberSince | date:'longDate' }}</strong></p>
        </aside>
      </div>
    </section>
`
})
export class ProfileComponent {
  user: User = {
    name: 'Cristiano Ronaldo',
    email: 'cristiano@nightfall.stream',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg',
    memberSince: new Date('2004-12-03').toISOString(),
  };

  ngOnInit() {
    console.log(this.user.memberSince);
  }


   x : any = "10";
}
