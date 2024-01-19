import { Component } from "react";
import UserClass from "./UserClass";

class AboutClass extends Component {
  constructor() {
    super();
    

    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent Didmount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <UserClass name={"Count1"} address={"Delhi"} />
        {/* <UserClass name={"Count2"} address={"Mumbai"} /> */}
        {/* <UserClass name={"Count3"} address={"Kolkata"} /> */}

        <h1>About Page</h1>
      </div>
    );
  }
}

export default AboutClass;
