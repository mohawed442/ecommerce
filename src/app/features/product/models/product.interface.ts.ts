export interface ProductInterface {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  images: string[];
  sold: any; // استخدمنا any هنا بسبب الرقم الخرافي e+305 الموجود في الداتا
  ratingsQuantity: number;
  ratingsAverage: number;
  category: {
    _id: string;
    name: string;
    slug: string;
    image?: string;
  };
  brand: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };
  subcategory: {
    _id: string;
    name: string;
    slug: string;
    category: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
