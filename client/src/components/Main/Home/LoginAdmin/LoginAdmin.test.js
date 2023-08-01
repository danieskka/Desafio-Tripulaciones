import React from "react";
import { shallow } from "enzyme";
import LoginAdmin from "./LoginAdmin";

describe("LoginAdmin", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LoginAdmin />);
    expect(wrapper).toMatchSnapshot();
  });
});
