import { Component } from "react";
import UserClass from "./UserClass";

class AboutClass extends Component {
  constructor() {
    super();
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <UserClass name={"Count1"} address={"Delhi"} />
        <UserClass name={"Count2"} address={"Delhi"} />
        <UserClass name={"Count3"} address={"Delhi"} />

        <h1>About Page</h1>
      </div>
    );
  }
}

export default AboutClass;
