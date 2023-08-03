import React from "react";
import { shallow } from "enzyme";
import MiniLecture from "./MiniLecture";

describe("MiniLecture", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MiniLecture />);
    expect(wrapper).toMatchSnapshot();
  });
});
