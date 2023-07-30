import React from "react";
import { shallow } from "enzyme";
import GetTomorrowInfo from "./GetTomorrowInfo";

describe("GetTomorrowInfo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GetTomorrowInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
