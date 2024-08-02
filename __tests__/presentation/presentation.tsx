import ButtonsFixed from "@/components/buttonsFixed";
import Presentation from "@/components/presentation/presentation"
import { fireEvent, render, screen } from "@testing-library/react"

describe('Presentation', () => {
    it("renders the name in the presentation", () => {
        render(<Presentation />)

        expect(screen.getByText("SEBASTIAN ACTIS.")).toBeInTheDocument();

    })

    it("render the contact me in the presentation", () => {
        render(<Presentation />)

        expect(screen.getByText("CONTACT ME")).toBeInTheDocument();

        render(<ButtonsFixed />)

        const button = screen.getByText("ESP");

        fireEvent.click(button)

        expect(screen.getByText("CONTACTARME")).toBeInTheDocument();
    })
});
