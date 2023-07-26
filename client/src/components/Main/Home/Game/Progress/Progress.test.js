import React from "react";
import { shallow } from "enzyme";
import Progress from "./Progress";

describe("Progress", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Progress />);
    expect(wrapper).toMatchSnapshot();
  });
});
