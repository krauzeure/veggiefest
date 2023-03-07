import { render, screen } from '@testing-library/react';
import Home from '../pages';

describe('homepage', () => {
  it('renders correctly', () => {
    expect.hasAssertions();
    render(<Home recipesCount={999} />);

    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement).toBeInTheDocument();

    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(3);

    const availableRecipes = screen.getByText('recettes disponibles');
    expect(availableRecipes).toBeInTheDocument();

    const recipesCount = screen.getByText('999');
    expect(recipesCount).toBeInTheDocument();

    const recipesLink = screen.getByRole('link', {
      name: 'Découvrir les recettes',
    });
    expect(recipesLink).toBeInTheDocument();
  });
});
