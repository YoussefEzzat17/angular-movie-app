import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'stockStatus', standalone: true }) export class StockStatusPipe implements PipeTransform { transform(stock: number): string { if (stock === 0) return 'Unavailable'; if (stock < 5) return 'Limited passes'; return 'Available now'; } }
