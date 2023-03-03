import { StaticImageData } from "next/image";

export interface recipe {
    name: string,
    image: StaticImageData,
    difficulty: number,
    time: number,
    ingredients: {qty: string, name: string}[],
    steps: string[],
    recipeType: string
  }