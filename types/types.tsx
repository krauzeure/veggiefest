import { StaticImageData } from 'next/image';

export interface recipe {
  name: string;
  image: StaticImageData;
  difficulty: string;
  time: number;
  ingredients: { qty: string; name: string }[];
  steps: string[];
  recipeType: string;
  id: number;
}

export interface recipeResources {
  name: string;
  link: string;
}

export interface photoResources {
  name: string;
  link: string;
  artist: string;
}
