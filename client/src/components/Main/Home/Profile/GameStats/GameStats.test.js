import React from "react";
import { shallow } from "enzyme";
import GameStats from "./GameStats";

describe("GameStats", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GameStats />);
    expect(wrapper).toMatchSnapshot();
  });
});
