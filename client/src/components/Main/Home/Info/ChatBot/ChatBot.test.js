import React from "react";
import { shallow } from "enzyme";
import ChatBot from "./ChatBot";

describe("ChatBot", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ChatBot />);
    expect(wrapper).toMatchSnapshot();
  });
});
