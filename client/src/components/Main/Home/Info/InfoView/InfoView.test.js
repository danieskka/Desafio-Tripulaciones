import React from "react";
import { shallow } from "enzyme";
import InfoView from "./InfoView";

describe("InfoView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<InfoView />);
    expect(wrapper).toMatchSnapshot();
  });
});
