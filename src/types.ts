export interface Image {
  desktop: string;
  mobile: string;
  tablet: string;
}

export interface Include {
  quantity: number;
  item: string;
}

export interface Other {
  category: string;
  slug: string;
  name: string;
  image: Image;
}

export interface Gallery {
  first: Image;
  second: Image;
  third: Image;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: string;
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<Include>;
  gallery: Gallery;
  others: Array<Other>;
}

export type ProductFeature = Pick<
  Product,
  "id" | "new" | "name" | "description" | "slug" | "price"
>;

export type CartProduct = Pick<ProductFeature, "id" | "name" | "price"> & {
  quantity: number;
};
