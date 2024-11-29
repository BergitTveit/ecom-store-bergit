interface ImageUrl {
  url: string;
  alt: string;
}
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: ImageUrl;
  rating: number;
  tags: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface ApiResponse<T> {
  data: T;
  status: string;
  message?: string;
}
