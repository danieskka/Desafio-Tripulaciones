import React from "react";
import { shallow } from "enzyme";
import Game from "./Game";

describe("Game", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper).toMatchSnapshot();
  });
});
