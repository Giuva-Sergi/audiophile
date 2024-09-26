import { z } from "zod";

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

export type CartProduct = Pick<
  ProductFeature,
  "id" | "name" | "price" | "slug"
> & {
  quantity: number;
};

export const fieldsValueSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email(),
    phone: z
      .string()
      .min(1, { message: "Phone number is required" })
      .refine((val) => !isNaN(Number(val)), {
        message: "Phone number must be a valid number",
      }),
    address: z.string().min(1, { message: "Address is required" }),
    zipCode: z
      .string()
      .length(5, { message: "Zip Code must have 5 numbers" })
      .refine((val) => !isNaN(Number(val)), {
        message: "Zip Code must be valid",
      }),
    city: z.string().min(1, { message: "City is required" }),
    country: z.string().min(1, { message: "Country is required" }),
    paymentMethod: z.union([z.literal("e-money"), z.literal("cash")]),
    cardNumber: z
      .string()
      .optional()
      .refine((val) => (val ? !isNaN(Number(val)) : true), {
        message: "Card number invalid",
      }),
    cardPin: z
      .string()
      .optional()
      .refine((val) => (val ? !isNaN(Number(val)) : true), {
        message: "Pin invalid",
      }),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "e-money") {
        return data.cardNumber && data.cardPin;
      }
      return true;
    },
    {
      message: "Card number and pin are required for e-money",
      path: ["cardNumber", "cardPin"],
    }
  );

export type FieldsValue = z.infer<typeof fieldsValueSchema>;
