export interface Product {
  id: number; name: string; description: string; price: number; rating: number; stock: number;
  category: string; tags: string[]; imageUrl: string; addedOn: string; featured?: boolean;
}
