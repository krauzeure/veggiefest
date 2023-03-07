import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('search component', () => {
  it('renders the component correctly', () => {
    expect.hasAssertions();

    const mockFunc = jest.fn();
    render(<Search applyFilters={mockFunc} />);

    const inputElements = screen.getAllByRole('checkbox');
    expect(inputElements).toHaveLength(6);

    const searchButton = screen.getByRole('button', { name: 'Rechercher' });
    expect(searchButton).toBeInTheDocument();

    const timeSliderElement = screen.getByTestId('time-slider');
    expect(timeSliderElement).toBeInTheDocument();

    ['Entrée', 'Plat', 'Dessert', 'Facile', 'Moyen', 'Difficile'].map(
      (elmt) => {
        expect(screen.getByText(elmt)).toBeInTheDocument();
      }
    );
  });
});
