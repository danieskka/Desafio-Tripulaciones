import React from "react";
import { shallow } from "enzyme";
import Zone from "./Zone";

describe("Zone", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Zone />);
    expect(wrapper).toMatchSnapshot();
  });
});
