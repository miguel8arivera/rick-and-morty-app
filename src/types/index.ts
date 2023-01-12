export type Product = {
  id: number;
  codigo: string;
  name: string;
  price: number;
  description: string;
  image: string;
  stock: number;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
};

export type ThemeProps = {
  children: JSX.Element;
};
