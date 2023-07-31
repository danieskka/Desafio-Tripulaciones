import React from "react";
import { shallow } from "enzyme";
import GetTodayInfo from "./GetTodayInfo";

describe("GetTodayInfo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GetTodayInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
