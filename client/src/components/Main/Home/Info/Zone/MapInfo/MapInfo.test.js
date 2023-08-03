import React from "react";
import { shallow } from "enzyme";
import MapInfo from "./MapInfo";

describe("MapInfo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MapInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
