export interface Product {
  id: number;
  slug: string;
  name: string;
  image: object;
  category: string;
  categoryImage: object;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<object>;
  gallery: object;
  others: Array<object>;
}
