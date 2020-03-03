import React from "react";
import { render } from "@testing-library/react";

import Dumb from "./Dumb";
import dumbFunction from './dumbFunction';

jest.mock('./dumbFunction');

describe('A dumb React Testing Library Test', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it('calls dumbFunction from useEffect', () => {
        const { rerender } = render(<Dumb value='hello' />);
        rerender(<Dumb value='world' />);

        expect(dumbFunction).toHaveBeenCalledWith('hello');
        expect(dumbFunction).toHaveBeenCalledWith('world');
    })
})