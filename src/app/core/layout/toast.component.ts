import { Component, inject } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
    @if (toast.message()) {
      <div class="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-xl border border-violet-400/30 bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-black/40" role="status" aria-live="polite">
        <span class="grid h-6 w-6 place-items-center rounded-full bg-violet-500 text-white">✓</span>
        {{ toast.message() }}
      </div>
    }
  `,
})
export class ToastComponent {
  readonly toast = inject(ToastService);
}
