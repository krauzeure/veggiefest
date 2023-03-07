import { StaticImageData } from "next/image";

export interface recipe {
    name: string,
    image: StaticImageData,
    difficulty: string,
    time: number,
    ingredients: {qty: string, name: string}[],
    steps: string[],
    recipeType: string,
    id: number
  }