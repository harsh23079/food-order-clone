import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.interval = 0;
    // this.response = {
    //   name: "default",
    //   location: "default",
    //   avatar_url: "default",
    // };
    this.state = {
      name: "default",
      location: "default",
      avatar_url: "default",
      number: 0,
      count: 12,
    };
    console.log(this.state.name + " constructor");
  }

  async componentDidMount() {
    // this.interval = setInterval(() => {
    //   console.log("setInterval");
    // }, 1000);
    const api = await fetch("  https://api.github.com/users/harsh23079");
    const data = await api.json();
    console.log(data);
    this.setState({
      name: data.name,
      location: data.location,
      avatar_url: data.avatar_url,
    });
    console.log(this.state.name + " DidMount");
  }
  // After Each change on page it is called
  componentDidUpdate() {
    console.log("it is updated");
  }
  componentWillUnmount() {
    // clearInterval(this.interval);
    console.log("will unmount");
  }
  render() {
    // const { name, address } = this.props;
    const { number, name, location, avatar_url } = this.state;
    // const { name, location, avatar_url } = this.response;
    console.log(name + " render");

    return (
      <div>
        <h2>Name is {name}</h2>
        <h2>Address is {location}</h2>
        <img src={avatar_url} alt="avatar_image" />
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
