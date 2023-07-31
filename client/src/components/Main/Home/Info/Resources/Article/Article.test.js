import React from "react";
import { shallow } from "enzyme";
import Article from "./Article";

describe("Article", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Article />);
    expect(wrapper).toMatchSnapshot();
  });
});
