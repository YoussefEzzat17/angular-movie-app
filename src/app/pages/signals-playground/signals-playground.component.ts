import { CurrencyPipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <section class="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p class="text-sm font-semibold text-violet-400">HANDS-ON WORKSHOP</p>
      <h1 class="mt-1 text-4xl font-bold">Signals Playground</h1>
      <p class="mt-3 max-w-3xl text-slate-400">
        Change the product and quantity below. Every value updates automatically because Angular Signals are reactive.
      </p>

      <div class="mt-10 grid gap-5 md:grid-cols-2">
        <article class="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p class="text-xs font-bold tracking-wider text-violet-300">1 · SIGNAL()</p>
          <h2 class="mt-2 text-xl font-bold">Reactive state</h2>
          <p class="mt-2 text-sm text-slate-400">
            <code class="text-violet-300">signal()</code> creates reactive state. Read a signal by calling it with <code class="text-violet-300">()</code>.
          </p>
          <div class="mt-5 space-y-2 rounded-xl bg-slate-800 p-4">
            <p>Product: <strong>{{ productName() }}</strong></p>
            <p>Price: <strong>{{ price() | currency }}</strong></p>
            <p>Quantity: <strong>{{ quantity() }}</strong></p>
          </div>
          <div class="mt-4 flex items-center gap-3">
            <span class="text-sm text-slate-400">Try changing the price:</span>
            <button (click)="decreasePrice()" class="rounded-lg border border-slate-600 px-3 py-1 hover:bg-slate-800">− $5</button>
            <button (click)="increasePrice()" class="rounded-lg border border-slate-600 px-3 py-1 hover:bg-slate-800">+ $5</button>
          </div>
          <p class="mt-4 text-xs text-slate-500">Example: <code class="text-violet-300">this.price()</code></p>
        </article>

        <article class="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p class="text-xs font-bold tracking-wider text-violet-300">2 · SET()</p>
          <h2 class="mt-2 text-xl font-bold">Replace a value</h2>
          <p class="mt-2 text-sm text-slate-400">
            <code class="text-violet-300">set()</code> replaces the current value with a new value.
          </p>
          <button (click)="changeProduct()" class="mt-5 rounded-xl bg-violet-500 px-4 py-2.5 font-semibold text-white hover:bg-violet-400">
            Change Protein to Creatine
          </button>
          <p class="mt-4 rounded-xl bg-slate-800 p-4 text-slate-300">Current product: <strong class="text-white">{{ productName() }}</strong></p>
        </article>

        <article class="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p class="text-xs font-bold tracking-wider text-violet-300">3 · UPDATE()</p>
          <h2 class="mt-2 text-xl font-bold">Change using the current value</h2>
          <p class="mt-2 text-sm text-slate-400">
            <code class="text-violet-300">update()</code> calculates a new value from the current value. The quantity never goes below 1.
          </p>
          <div class="mt-5 flex items-center gap-4"><button (click)="decreaseQuantity()" class="grid h-10 w-10 place-items-center rounded-xl border border-slate-600 text-xl hover:bg-slate-800">−</button><strong class="text-2xl">{{ quantity() }}</strong><button (click)="increaseQuantity()" class="grid h-10 w-10 place-items-center rounded-xl bg-violet-500 text-xl hover:bg-violet-400">+</button></div>
          <p class="mt-4 text-xs text-slate-500"><code class="text-violet-300">set(5)</code> chooses a value. <code class="text-violet-300">update(value =&gt; value + 1)</code> uses the old value.</p>
        </article>

        <article class="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p class="text-xs font-bold tracking-wider text-violet-300">4 · COMPUTED()</p>
          <h2 class="mt-2 text-xl font-bold">A derived value</h2>
          <p class="mt-2 text-sm text-slate-400"><code class="text-violet-300">computed()</code> creates a value from other Signals. It is never updated manually.</p>
          <div class="mt-5 rounded-xl bg-slate-800 p-4"><p>Price: {{ price() | currency }}</p><p>Quantity: {{ quantity() }}</p><p class="mt-2 text-lg">Total price: <strong class="text-violet-300">{{ totalPrice() | currency }}</strong></p></div>
          <pre class="mt-4 overflow-x-auto text-xs text-violet-200">price ───────┐
             ├──→ totalPrice
quantity ────┘</pre>
        </article>
      </div>

      <article class="mt-5 rounded-2xl border border-violet-400/30 bg-violet-950/20 p-6">
        <p class="text-xs font-bold tracking-wider text-violet-300">5 · REACTIVE CHAIN</p>
        <h2 class="mt-2 text-xl font-bold">One change, several automatic updates</h2>
        <p class="mt-2 text-sm text-slate-400">At quantity 5 or higher, a $10 discount is applied automatically.</p>
        <div class="mt-5 grid gap-3 sm:grid-cols-4"><div class="rounded-xl bg-slate-900 p-4"><p class="text-xs text-slate-400">Price</p><strong>{{ price() | currency }}</strong></div><div class="rounded-xl bg-slate-900 p-4"><p class="text-xs text-slate-400">Quantity</p><strong>{{ quantity() }}</strong></div><div class="rounded-xl bg-slate-900 p-4"><p class="text-xs text-slate-400">Subtotal</p><strong>{{ subtotal() | currency }}</strong></div><div class="rounded-xl bg-slate-900 p-4"><p class="text-xs text-slate-400">Discount</p><strong class="text-emerald-400">−{{ discount() | currency }}</strong></div></div>
        <p class="mt-4 rounded-xl bg-violet-500/15 p-4 text-lg">Final price: <strong class="text-violet-200">{{ finalPrice() | currency }}</strong></p>
        <pre class="mt-4 overflow-x-auto text-xs text-violet-200">quantity changes
       ↓
subtotal changes → discount changes → finalPrice changes</pre>
      </article>

      <article class="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p class="text-xs font-bold tracking-wider text-violet-300">6 · EFFECT()</p>
        <h2 class="mt-2 text-xl font-bold">Run a side effect</h2>
        <p class="mt-2 text-sm text-slate-400"><code class="text-violet-300">effect()</code> runs side effects when the Signals it reads change. Open the browser console and change quantity to see <code class="text-violet-300">Cart changed:</code>.</p>
        <p class="mt-4 text-sm text-slate-300"><strong>Remember:</strong> <code class="text-violet-300">computed()</code> derives data for the UI; <code class="text-violet-300">effect()</code> performs a side effect such as logging.</p>
      </article>
    </section>
  `,
})
export class SignalsPlaygroundComponent {
  // signal() creates reactive state.
  readonly productName = signal('Protein');
  readonly price = signal(50);
  readonly quantity = signal(1);

  // computed() derives new values from Signals without manual updates.
  readonly totalPrice = computed(() => this.price() * this.quantity());
  readonly subtotal = computed(() => this.price() * this.quantity());
  readonly discount = computed(() => (this.quantity() >= 5 ? 10 : 0));
  readonly finalPrice = computed(() => this.subtotal() - this.discount());

  constructor() {
    effect(() => {
      console.log('Cart changed:', this.finalPrice());
    });
  }

  changeProduct(): void {
    this.productName.set('Creatine');
  }

  increaseQuantity(): void {
    this.quantity.update((value) => value + 1);
  }

  decreaseQuantity(): void {
    this.quantity.update((value) => Math.max(1, value - 1));
  }

  increasePrice(): void {
    this.price.update((value) => value + 5);
  }

  decreasePrice(): void {
    this.price.update((value) => Math.max(5, value - 5));
  }
}
