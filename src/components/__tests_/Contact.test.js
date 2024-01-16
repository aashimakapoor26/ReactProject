import { render, screen } from "@testing-library/react";
import Contact from "../../pages/Contact";
import "@testing-library/jest-dom";

describe('Contact page test cases', () => {
    //test or it both are same
    test("Should load contact us component", () => {
        render(<Contact />); // before testing render the component to the jsdom
    
        const heading = screen.getByRole("heading"); // access component elements using screen
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside contact us component", () => {
        render(<Contact />); // before testing render the component to the jsdom
    
        const button = screen.getByText("Submit"); // access component elements using screen
        expect(button).toBeInTheDocument();
    });
    
    it("Should load input inside contact us component", () => {
        render(<Contact />); // before testing render the component to the jsdom
    
        const inputName = screen.getByPlaceholderText("name"); // access component elements using screen
        expect(inputName).toBeInTheDocument();
    });
    
    it("Should load two input boxes on the contact us component", () => {
        render(<Contact />); // before testing render the component to the jsdom
    
        // Querying
        const inputBoxes = screen.getAllByRole("textbox"); // access component elements using screen
        console.log(inputBoxes);
        // Assertion
        expect(inputBoxes.length).toBe(2);
    });
});