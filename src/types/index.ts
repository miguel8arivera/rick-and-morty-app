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

export type CardItem = {
  _id: string;
  description: string;
  image: string;
  inStock: number;
  price: number;
  sizes: ISizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ITypes;
  genter: IGenter;
};

type ITypes = 'shoes' | 'clothes' | 'accessories';

enum IGenter {
  FEMENINO = 'Femenino',
  MASCULINO = 'Masculino',
  UNISEX = 'Unisex',
}

type ISizes = 'xs' | 's' | 'm' | 'l' | 'xl';
