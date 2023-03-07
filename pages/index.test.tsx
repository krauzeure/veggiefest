import { render, screen } from '@testing-library/react';
import Home from '.';
import Dahl from '../assets/114451_w2000h3128c1cx540cy844cxb1080cyb1689.webp'

describe("Homepage", () => {

    beforeEach(() => {
        render(<Home recipesCount={1}
          />)
    })

    test("renders correctly", () => {
        const titleElement = screen.getByRole("heading", {level: 1})
        expect(titleElement).toBeInTheDocument()

        const imageElements = screen.getAllByRole('img')
        expect(imageElements.length).toEqual(3)

        const availableRecipes = screen.getByText("recettes disponibles")
        expect(availableRecipes).toBeInTheDocument()

        const recipesCount = screen.getByTestId("recipes-count")
        expect(recipesCount).toBeInTheDocument()

        const recipesLink = screen.getByRole("link", {name: "Découvrir les recettes"})
        expect(recipesLink).toBeInTheDocument()
    })
    test("recipes count is a number", () => {
        const recipesCount = screen.getByTestId("recipes-count")
        const elementContent = recipesCount.textContent
        expect(Number(elementContent)).not.toBeNaN()
    })
})