// import { fireEvent, render } from "@testing-library/react";
import { /*fireEvent,*/ render } from "@testing-library/react";
import { describe, it} from "vitest";
import AtLoading from "../components/atoms/AtLoading/AtLoading"

describe('AtLoading', () => {
    // beforeEach(()=>{
    //     render(<AtLoading></AtLoading>)
    // })
    it('should render the AtLoading with the correct props', () => {
        // const mockFn = vi.fn();
        render(
            <AtLoading/>)});
    // test('should add two numbers', ()=>{
    //     expect(1+1).toBe(2);
    // })

})