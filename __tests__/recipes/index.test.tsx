import { render, screen } from '@testing-library/react';
import Recipes from '../../pages/recipes/index';
import Dahl from '../../assets/114451_w2000h3128c1cx540cy844cxb1080cyb1689.webp';

const recipes = [
  {
    name: 'Dahl de lentilles corail',
    image: Dahl,
    difficulty: 'facile',
    time: 30,
    ingredients: [
      { qty: '30cl', name: 'Lentilles corail' },
      { qty: '5', name: 'Tomates' },
      { qty: '4', name: 'Carottes' },
      { qty: '1 càs', name: 'Huile de tournesol' },
      { qty: '1', name: "Gousse d'ail hachée" },
      { qty: '1 càs', name: 'Concentré de tomates' },
    ],
    steps: [
      'Laver les tomates et les découper en dés. Peler les carottes, et les découper en fines rondelles.',
      "Dans une casserole, verser les lentilles corail et couvrir d'eau. Porter à ébullition. Laisser cuire pendant 10 min environ, jusqu'à complète absorption de l'eau. Retire du feu et laisser reposer.",
      "Dans une sauteuse, verser l'huile et chauffer. Y ajouter l'ail qui dorera pendant une petite minute. Verser ensuite les légumes et saupoudrer avec les épices. Ajouter enfin le concentré de tomate.",
      'Verser le lait de coco et laisser mijoter environ 10 min. sans couvrir.',
      'Enfin, ajouter les lentilles et bien remuer le tout.',
    ],
    recipeType: 'Plat',
    id: 1,
  },
];

describe('recipes index', () => {
  it('renders correctly', () => {
    expect.hasAssertions();
    render(<Recipes recipes={recipes} />);
    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement).toHaveTextContent('Recettes');

    const listContainer = screen.getByRole('list');
    expect(listContainer).toBeInTheDocument();

    const listElement = screen.getByRole('listitem');
    expect(listElement).toBeInTheDocument();
  });

  it('renders the correct number of images per recipes', () => {
    expect.hasAssertions();
    render(<Recipes recipes={recipes} />);
    const listElements = screen.getAllByRole('listitem');
    expect(listElements).toHaveLength(1);

    const recipeImage = screen.getAllByRole('img');
    expect(recipeImage).toHaveLength(listElements.length);
  });

  it('renders the search component', () => {
    expect.hasAssertions();
    render(<Recipes recipes={recipes} />);
    const searchElement = screen.getByRole('search');
    expect(searchElement).toBeInTheDocument();
  });
});
