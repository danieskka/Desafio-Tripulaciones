import React from "react";
import { shallow } from "enzyme";
import Articles from "./Articles";

describe("Articles", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Articles />);
    expect(wrapper).toMatchSnapshot();
  });
});
