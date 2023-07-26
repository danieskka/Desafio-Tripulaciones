import React from "react";
import { shallow } from "enzyme";
import Infobar from "./Infobar";

describe("Infobar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Infobar />);
    expect(wrapper).toMatchSnapshot();
  });
});
