import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p class="text-sm font-semibold text-violet-400">HANDS-ON WORKSHOP</p>
      <h1 class="mt-1 text-4xl font-bold">Angular binding practice</h1>
      <p class="mt-3 max-w-2xl text-slate-400">
        Edit this component file, save it, and watch the results update in the browser.
      </p>

      <!-- 01 · INTERPOLATION -->
      <div class="mt-10 grid gap-5 md:grid-cols-2">
        <article class="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p class="text-xs font-bold tracking-wider text-violet-300">01 · INTERPOLATION</p>
          <h2 class="mt-2 text-xl font-bold">Show a title</h2>
          <p class="mt-2 text-sm text-slate-400">
            Change <code class="text-violet-300">practiceTitle</code> to your favorite movie or series.
          </p>
          <div class="mt-5 rounded-xl bg-slate-800 p-4">
            <span class="text-slate-400">Your pick:</span>
            <strong>{{ practiceTitle }}</strong>
          </div>
          <p class="mt-4 text-xs text-slate-500">Hint: {{ '{{ practiceTitle }}' }}</p>
        </article>

        <!-- 02 · PROPERTY BINDING -->
        <article class="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p class="text-xs font-bold tracking-wider text-violet-300">02 · PROPERTY BINDING</p>
          <h2 class="mt-2 text-xl font-bold">Control a button</h2>
          <p class="mt-2 text-sm text-slate-400">
            Toggle availability, then inspect the bound button property.
          </p>
          <button
            [disabled]="isNotAvailable"
            class="mt-4 rounded-xl bg-violet-500 px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-700"
          >
            Play episode
          </button>
          <p class="mt-4 text-xs text-slate-500">
            Hint: <code class="text-violet-300">[disabled]</code>
          </p>
        </article>

        <!-- 03 · EVENT BINDING -->
        <article class="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p class="text-xs font-bold tracking-wider text-violet-300">03 · EVENT BINDING</p>
          <h2 class="mt-2 text-xl font-bold">Rate a title</h2>
          <p class="mt-2 text-sm text-slate-400">
            Click the button, then change the points added in
            <code class="text-violet-300">giveRating()</code>.
          </p>
          <div class="mt-5 flex items-center gap-4">
            <button (click)="giveRating()" class="rounded-xl bg-violet-500 px-4 py-2 font-semibold text-white">
              Give a star ★
            </button>
            <strong>{{ stars }} stars</strong>
          </div>
          <p class="mt-4 text-xs text-slate-500">
            Hint: <code class="text-violet-300">(click)</code>
          </p>
        </article>

        <!-- 04 · TWO-WAY BINDING -->
        <article class="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p class="text-xs font-bold tracking-wider text-violet-300">04 · TWO-WAY BINDING</p>
          <h2 class="mt-2 text-xl font-bold">Write a review</h2>
          <p class="mt-2 text-sm text-slate-400">
            Type a review and see it update without pressing a button.
          </p>
          <input
            [(ngModel)]="review"
            class="mt-5 w-full rounded-xl border border-slate-600 bg-slate-800 px-3 py-2.5 text-slate-100 focus:border-violet-400 focus:outline-none"
            placeholder="This title is..."
          />
          <p class="mt-4 rounded-xl bg-slate-800 p-4 text-slate-200">
            {{ review || 'Your live review will appear here.' }}
          </p>
          <p class="mt-4 text-xs text-slate-500">
            Hint: <code class="text-violet-300">[(ngModel)]</code>
          </p>
        </article>
      </div>

      <div class="mt-8 rounded-2xl border border-violet-400/20 bg-violet-950/30 p-6">
        <h2 class="font-bold text-violet-200">Final challenge</h2>
        <p class="mt-2 text-sm text-slate-300">
          Add a reset button that sets the title to an empty string, stars to 0, and review to an empty string.
          Use event binding and confirm all live UI values reset.
        </p>
      </div>
    </section>
  `,
})
export class BindingPracticeComponent {
  // Student task: replace this starter value with a title you enjoy.
  practiceTitle = 'The Last Horizon';
  isNotAvailable = true;
  stars = 0;
  review = '';

  giveRating(): void {
    // Student task: change the number and test the button again.
    this.stars += 1;
  }
}
