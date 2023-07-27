import React from "react";
import { shallow } from "enzyme";
import Gallery from "./Gallery";

describe("Gallery", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper).toMatchSnapshot();
  });
});
