import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly message = signal('');
  private timeoutId?: ReturnType<typeof setTimeout>;

  show(message: string): void {
    this.message.set(message);
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.message.set(''), 3000);
  }
}
