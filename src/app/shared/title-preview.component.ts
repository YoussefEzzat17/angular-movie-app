import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-title-preview',
  standalone: true,
  template: `
    <article class="rounded-2xl border border-violet-400/30 bg-slate-900 p-5">
      <p class="text-xs font-bold tracking-wider text-violet-300">CHILD COMPONENT</p>
      <h3 class="mt-2 text-xl font-bold">{{ rawan }}</h3>
      <p class="mt-2 text-sm text-slate-400">This title arrived from the parent using <code class="text-violet-300">@Input()</code>.</p>
      <button (click)="addToWatchlist.emit(rawan)" class="mt-4 rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-400">
        Add to watchlist
      </button>
    </article>
  `,
})
export class TitlePreviewComponent {
  @Input({ required: true }) rawan = '';
  @Output() addToWatchlist = new EventEmitter<string>();
}
