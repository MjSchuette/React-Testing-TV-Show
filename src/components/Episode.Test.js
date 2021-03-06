import React from "react";
import { render } from "@testing-library/react";

import Episodes from "./Episodes";

test("Renders Episodes without props, and again with props", () => {
    const mockData = { 
        id: '123',
        image: { medium: 'medium_image'},
        name: 'name',
        season: 3,
        number: 2,
        summary: '<p>Summary</p>',
        runtime: 20
    }
    const { queryAllByText, rerender, debug } = render(<Episodes episodes={[]}/>);
    expect(queryAllByText(/season/i) === null);
    rerender(<Episodes episodes={[mockData]}/>);
    expect(queryAllByText(/name/i)).toHaveLength(1);

}) 