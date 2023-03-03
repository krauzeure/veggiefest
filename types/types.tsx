export interface recipe {
    name: string,
    image: string,
    difficulty: number,
    time: number,
    ingredients: {qty: string, name: string}[],
    steps: string[],
    recipeType: string
  }