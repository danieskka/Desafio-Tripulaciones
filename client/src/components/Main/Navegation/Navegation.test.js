import React from "react";
import { shallow } from "enzyme";
import Navegation from "./Navegation";

describe("Navegation", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Navegation />);
    expect(wrapper).toMatchSnapshot();
  });
});
