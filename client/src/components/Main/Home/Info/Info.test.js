import React from "react";
import { shallow } from "enzyme";
import Info from "./Info";

describe("Info", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Info />);
    expect(wrapper).toMatchSnapshot();
  });
});
