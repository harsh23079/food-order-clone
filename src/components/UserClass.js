import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      count: 12,
    };
    console.log(this.props.name + " constructor");
  }
  componentDidMount() {
    console.log(this.props.name + " DidMount");
  }
  render() {
    const { name, address } = this.props;
    const { number } = this.state;
    console.log(name + " render");

    return (
      <div>
        <h2>Name is {name}</h2>
        <h2>Address is {address}</h2>
        <p>{number}</p>
        <button
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          {" "}
          Increment
        </button>
        <button
          onClick={() => {
            number > 0
              ? this.setState({
                  number: this.state.number - 1,
                })
              : alert("Beyond 0 you can't decrement anymore");
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default UserClass;
