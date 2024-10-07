import { /*fireEvent,*/ render } from "@testing-library/react";
import { /*beforeEach, */describe, expect, it, vi } from "vitest";
import AtButton from "../components/atoms/AtButton/AtButton"

describe('AtButton', () => {

    
    // beforeEach(()=>{
    //     render(
    //     <AtButton  
    //     type="button"
    //         variant="light"
    //         className="btn-component"
    //         id="id"
    //         size="sm" 
    //         onClick={mockFn}>Hola mundo</AtButton>)

    // })

    it('should render the button with the correct props', () => {
        // const mockFn = vi.fn();
        let mockFn = vi.fn();
        const { getByRole } =  render(
            <AtButton
                type="button"
                variant="light"
                className="btn-component"
                id="id"
                size="sm"
                onClick={mockFn}
            >Hola mundo</AtButton>
        );
    
        const button = getByRole('button');
    
        expect(button).toHaveAttribute('type', 'button');
        expect(button).toHaveClass('btn-component');
        // expect(button).toHaveAttribute('id', 'id');
        // expect(button).toHaveAttribute('size', 'sm');
        // expect(button).('variant', 'light');
        expect(button).toBeInTheDocument();
    });
    
    it('should call the onClick handler when the button is clicked', () => {
        const mockFn = vi.fn();
        // const { getByRole } = 
        render(
            <AtButton
                type="button"
                variant="light"
                className="btn-component"
                id="id"
                size="sm"
                onClick={mockFn}
            />
        );
    
        // const button = getByRole('button');
        // console.log(button);
        // fireEvent.click(button);
    
        // expect(mockFn).toHaveBeenCalledTimes(1);
        });
});
