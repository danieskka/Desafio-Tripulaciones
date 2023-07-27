import React from "react";
import { shallow } from "enzyme";
import Resources from "./Resources";

describe("Resources", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Resources />);
    expect(wrapper).toMatchSnapshot();
  });
});
