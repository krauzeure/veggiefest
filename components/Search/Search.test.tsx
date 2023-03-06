import { render, screen } from '@testing-library/react';
import Search from './Search';

describe("Search component", () => {

    beforeEach(() => {
        const mockFunc = jest.fn()
        render(<Search applyFilters={mockFunc}/>)
    })

    test("renders the component correctly", () => {
        const inputElements = screen.getAllByRole("checkbox")
        expect(inputElements.length).toEqual(6)

        const searchButton = screen.getByRole("button", {name: "Rechercher"})
        expect(searchButton).toBeInTheDocument()

        const timeSliderElement = screen.getByTestId("time-slider")
        expect(timeSliderElement).toBeInTheDocument()

        const entreeLabel = screen.getByText("Entrée")
        expect(entreeLabel).toBeInTheDocument()

        const mainLabel = screen.getByText("Plat")
        expect(mainLabel).toBeInTheDocument()

        const dessertLabel = screen.getByText("Dessert")
        expect(dessertLabel).toBeInTheDocument()

        const easyLabel = screen.getByText("Facile")
        expect(easyLabel).toBeInTheDocument()

        const mediumLabel = screen.getByText("Moyen")
        expect(mediumLabel).toBeInTheDocument()

        const difficultLabel = screen.getByText("Difficile")
        expect(difficultLabel).toBeInTheDocument()
    })
})